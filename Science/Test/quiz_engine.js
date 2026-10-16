
/* ==================================================
   STUDENTS COMPANION — MASTER QUIZ ENGINE

   Features:
   - Configurable access authentication
   - Session recovery after browser refresh
   - Stable shuffled question and choice order
   - Immediate answer-state saving
   - Previous/Next navigation
   - Score calculation and completion recovery
   - Restricted replay requires fresh authentication

   Session recovery uses sessionStorage.
   Authentication remains in quiz_auth.js.
================================================== */

// ==================================================
// SHUFFLE
// ==================================================

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

// ==================================================
// QUIZ CONFIGURATION AND STATE
// ==================================================

var accessMode = quizConfig.accessMode || "open";
var accessId = quizConfig.accessId || quizConfig.title || "default-quiz";

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var learnerFullName = "";
var completionTimestamp = "";

var baseQuestions = questions.slice();
var choiceOrders = [];
var userAnswers = {};

var SESSION_VERSION = 1;

var sessionStorageKey =
    "studentsCompanionQuizSession_v1_" +
    encodeURIComponent(accessId) + "_" +
    encodeURIComponent(accessMode);

var questionSignature = JSON.stringify(
    baseQuestions.map(function (question) {
        return {
            question: question.question,
            choices: question.choices,
            correctAnswer: question.correctAnswer
        };
    })
);

// ==================================================
// SESSION STORAGE HELPERS
// ==================================================

function clearSavedQuizSession() {
    try {
        sessionStorage.removeItem(sessionStorageKey);
    } catch (error) {
        // The quiz can still operate without session storage.
    }
}

function getQuestionOrder() {
    return questions.map(function (question) {
        return baseQuestions.indexOf(question);
    });
}

function saveQuizSession(stage) {
    var sessionData = {
        version: SESSION_VERSION,
        accessId: accessId,
        accessMode: accessMode,
        quizTitle: quizConfig.title,
        questionSignature: questionSignature,

        stage: stage,
        learnerFullName: learnerFullName,

        questionOrder: getQuestionOrder(),
        choiceOrders: choiceOrders,

        currentQuestion: currentQuestion,
        userAnswers: userAnswers,

        quizOver: quizOver,
        correctAnswers: correctAnswers,
        completionTimestamp: completionTimestamp
    };

    try {
        sessionStorage.setItem(
            sessionStorageKey,
            JSON.stringify(sessionData)
        );

        return true;
    } catch (error) {
        // Continue the quiz if saving is unavailable.
        return false;
    }
}

function isValidIndexOrder(order, expectedLength, limit) {
    if (!Array.isArray(order) || order.length !== expectedLength) {
        return false;
    }

    var seen = {};

    for (var i = 0; i < order.length; i++) {
        var index = order[i];

        if (
            !Number.isInteger(index) ||
            index < 0 ||
            index >= limit ||
            seen[index]
        ) {
            return false;
        }

        seen[index] = true;
    }

    return true;
}

function isValidSavedSession(saved) {
    if (!saved || typeof saved !== "object") {
        return false;
    }

    if (
        saved.version !== SESSION_VERSION ||
        saved.accessId !== accessId ||
        saved.accessMode !== accessMode ||
        saved.quizTitle !== quizConfig.title ||
        saved.questionSignature !== questionSignature
    ) {
        return false;
    }

    if (
        typeof saved.learnerFullName !== "string" ||
        saved.learnerFullName.trim() === "" ||
        saved.learnerFullName.length > 20
    ) {
        return false;
    }

    if (
        saved.stage !== "quiz" &&
        saved.stage !== "completion"
    ) {
        return false;
    }

    if (
        !isValidIndexOrder(
            saved.questionOrder,
            baseQuestions.length,
            baseQuestions.length
        )
    ) {
        return false;
    }

    if (
        !Array.isArray(saved.choiceOrders) ||
        saved.choiceOrders.length !== baseQuestions.length
    ) {
        return false;
    }

    for (var i = 0; i < saved.questionOrder.length; i++) {
        var originalQuestion =
            baseQuestions[saved.questionOrder[i]];

        if (
            !originalQuestion ||
            !Array.isArray(originalQuestion.choices)
        ) {
            return false;
        }

        if (
            !isValidIndexOrder(
                saved.choiceOrders[i],
                originalQuestion.choices.length,
                originalQuestion.choices.length
            )
        ) {
            return false;
        }
    }

    if (
        !Number.isInteger(saved.currentQuestion) ||
        saved.currentQuestion < 0 ||
        saved.currentQuestion >= baseQuestions.length
    ) {
        return false;
    }

    if (
        typeof saved.quizOver !== "boolean" ||
        !Number.isInteger(saved.correctAnswers) ||
        saved.correctAnswers < 0 ||
        saved.correctAnswers > baseQuestions.length ||
        typeof saved.completionTimestamp !== "string"
    ) {
        return false;
    }

    if (
        saved.stage === "completion" &&
        (
            saved.quizOver !== true ||
            saved.completionTimestamp === ""
        )
    ) {
        return false;
    }

    if (
        saved.stage === "quiz" &&
        saved.quizOver !== false
    ) {
        return false;
    }

    if (
        !saved.userAnswers ||
        typeof saved.userAnswers !== "object" ||
        Array.isArray(saved.userAnswers)
    ) {
        return false;
    }

    var answerKeys = Object.keys(saved.userAnswers);

    for (var j = 0; j < answerKeys.length; j++) {
        var questionIndex = Number(answerKeys[j]);
        var answerIndex = saved.userAnswers[answerKeys[j]];

        if (
            !Number.isInteger(questionIndex) ||
            String(questionIndex) !== answerKeys[j] ||
            questionIndex < 0 ||
            questionIndex >= baseQuestions.length ||
            !Number.isInteger(answerIndex)
        ) {
            return false;
        }

        var questionForAnswer =
            baseQuestions[saved.questionOrder[questionIndex]];

        if (
            answerIndex < 0 ||
            answerIndex >= questionForAnswer.choices.length
        ) {
            return false;
        }
    }

    return true;
}

// ==================================================
// PAGE ELEMENTS
// ==================================================

var quizContainerElement =
    document.querySelector(".quizContainer");

var questionElement =
    document.querySelector(".question");

var choiceListElement =
    document.querySelector(".choiceList");

var quizMessageElement =
    document.querySelector(".quizMessage");

var resultElement =
    document.querySelector(".result");

var nextButtonElement =
    document.querySelector(".nextButton");

var previousButtonElement =
    document.querySelector(".previousButton");

// ==================================================
// WELCOME SCREEN
// ==================================================

var welcomeScreen = document.createElement("section");
welcomeScreen.className = "welcomeScreen";
welcomeScreen.setAttribute("aria-labelledby", "welcomeHeading");

var brandName = document.createElement("div");
brandName.className = "brandName";
brandName.textContent = "Students Companion";

var brandDescriptor = document.createElement("div");
brandDescriptor.className = "brandDescriptor";
brandDescriptor.textContent = "YOUR PARTNER IN LEARNING";

var brandMotto = document.createElement("div");
brandMotto.className = "brandMotto";
brandMotto.textContent = "Learn Today. Rise Tomorrow.";

var welcomeBrandHeader = document.createElement("div");
welcomeBrandHeader.className = "welcomeBrandHeader";
welcomeBrandHeader.appendChild(brandName);
welcomeBrandHeader.appendChild(brandDescriptor);
welcomeBrandHeader.appendChild(brandMotto);

var quizTitleElement = document.createElement("h3");
quizTitleElement.className = "quizTitle";
quizTitleElement.textContent = quizConfig.title;

var quizSubjectElement = document.createElement("p");
quizSubjectElement.className = "quizSubject";
quizSubjectElement.textContent = quizConfig.subject;

var quizInstructionsElement = document.createElement("p");
quizInstructionsElement.className = "quizInstructions";
quizInstructionsElement.textContent = quizConfig.instructions;

var welcomeHeading = document.createElement("h2");
welcomeHeading.id = "welcomeHeading";
welcomeHeading.textContent = "Welcome!";

var namePrompt = document.createElement("label");
namePrompt.textContent = "What is your name?";
namePrompt.htmlFor = "userName";

var userNameInput = document.createElement("input");
userNameInput.type = "text";
userNameInput.id = "userName";
userNameInput.maxLength = 20;
userNameInput.placeholder = "Enter your name";
userNameInput.autocomplete = "name";
userNameInput.setAttribute("aria-describedby", "nameMessage");

var startQuizButton = document.createElement("button");
startQuizButton.type = "button";
startQuizButton.className = "primaryButton";
startQuizButton.textContent = "Start Quiz";

var nameMessage = document.createElement("p");
nameMessage.className = "nameMessage";
nameMessage.id = "nameMessage";
nameMessage.setAttribute("role", "status");

welcomeScreen.appendChild(welcomeBrandHeader);
welcomeScreen.appendChild(quizTitleElement);
welcomeScreen.appendChild(quizSubjectElement);
welcomeScreen.appendChild(quizInstructionsElement);
welcomeScreen.appendChild(welcomeHeading);
welcomeScreen.appendChild(namePrompt);
welcomeScreen.appendChild(userNameInput);
welcomeScreen.appendChild(startQuizButton);
welcomeScreen.appendChild(nameMessage);

document.body.insertBefore(welcomeScreen, quizContainerElement);
quizContainerElement.style.display = "none";

// ==================================================
// AUTHENTICATION SCREEN
// ==================================================

var authScreen = document.createElement("section");
authScreen.className = "authScreen";
authScreen.setAttribute("aria-labelledby", "authHeading");
authScreen.style.display = "none";

var authHeading = document.createElement("h2");
authHeading.id = "authHeading";
authHeading.textContent = "Verify Your Access";

var authDescription = document.createElement("p");
authDescription.className = "authDescription";
authDescription.textContent = accessMode === "group"
    ? "Enter your group's access details to continue."
    : "Enter your passcode to continue.";

var authNameDisplay = document.createElement("p");
authNameDisplay.className = "authNameDisplay";

var groupNameLabel = document.createElement("label");
groupNameLabel.htmlFor = "groupName";
groupNameLabel.textContent = "Group Name";

var groupNameInput = document.createElement("input");
groupNameInput.type = "text";
groupNameInput.id = "groupName";
groupNameInput.placeholder = "Enter group name";
groupNameInput.autocomplete = "off";
groupNameInput.maxLength = 80;

var passcodeLabel = document.createElement("label");
passcodeLabel.htmlFor = "accessPasscode";
passcodeLabel.textContent = "Passcode";

var passcodeInput = document.createElement("input");
passcodeInput.type = "password";
passcodeInput.id = "accessPasscode";
passcodeInput.placeholder = "Enter passcode";
passcodeInput.autocomplete = "off";
passcodeInput.maxLength = 100;

var authenticateButton = document.createElement("button");
authenticateButton.type = "button";
authenticateButton.className = "primaryButton";
authenticateButton.textContent = "Verify and Continue";

var backToWelcomeButton = document.createElement("button");
backToWelcomeButton.type = "button";
backToWelcomeButton.className = "secondaryButton";
backToWelcomeButton.textContent = "Back";

var authMessage = document.createElement("p");
authMessage.className = "authMessage";
authMessage.setAttribute("role", "status");
authMessage.setAttribute("aria-live", "polite");

if (accessMode === "group") {
    authScreen.appendChild(groupNameLabel);
    authScreen.appendChild(groupNameInput);
}

authScreen.appendChild(authHeading);
authScreen.appendChild(authDescription);
authScreen.appendChild(authNameDisplay);
authScreen.appendChild(passcodeLabel);
authScreen.appendChild(passcodeInput);
authScreen.appendChild(authenticateButton);
authScreen.appendChild(backToWelcomeButton);
authScreen.appendChild(authMessage);

document.body.insertBefore(authScreen, quizContainerElement);

// ==================================================
// MAIN QUIZ HEADER
// ==================================================

var quizHeader = document.createElement("div");
quizHeader.className = "quizHeader";

var progressCounter = document.createElement("div");
progressCounter.className = "progressCounter";
progressCounter.setAttribute("aria-label", "Question progress");

quizHeader.appendChild(progressCounter);

var greetingElement = document.createElement("h2");
greetingElement.className = "greeting";
quizHeader.appendChild(greetingElement);

quizContainerElement.insertBefore(quizHeader, questionElement);

// ==================================================
// COMPLETION SCREEN
// ==================================================

var completionScreen = document.createElement("section");
completionScreen.className = "completionScreen";
completionScreen.setAttribute("aria-labelledby", "completionHeading");
completionScreen.style.display = "none";

var completionHeader = document.createElement("div");
completionHeader.className = "completionHeader";

var completionHeading = document.createElement("h2");
completionHeading.id = "completionHeading";
completionHeading.textContent = "Quiz Completed!";

var completionSubtitle = document.createElement("p");
completionSubtitle.className = "completionSubtitle";
completionSubtitle.textContent = "Well done on reaching the end.";

completionHeader.appendChild(completionHeading);
completionHeader.appendChild(completionSubtitle);

var completionArtwork = document.createElement("div");
completionArtwork.className = "completionArtwork";
completionArtwork.setAttribute("role", "img");
completionArtwork.setAttribute(
    "aria-label",
    "Abstract geometric illustration in navy and teal"
);

completionArtwork.innerHTML =
    '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<rect x="8" y="8" width="444" height="174" rx="12" fill="#FFFFFF" stroke="#BFCFDF" stroke-width="2"/>' +
    '<circle cx="112" cy="77" r="31" fill="#B9DCD7"/>' +
    '<circle cx="136" cy="64" r="31" fill="#0F8B8D"/>' +
    '<path d="M215 123 L275 31 L335 123 Z" fill="#203E63"/>' +
    '<path d="M264 123 L326 56 L391 123 Z" fill="#7395B7"/>' +
    '<path d="M78 147 H382" stroke="#BFCFDF" stroke-width="3"/>' +
    '</svg>';

var completionGreeting = document.createElement("p");
completionGreeting.className = "completionGreeting";

var finalScoreLabel = document.createElement("p");
finalScoreLabel.className = "finalScoreLabel";
finalScoreLabel.textContent = "Final Score";

var finalScore = document.createElement("p");
finalScore.className = "finalScore";

var completionNote = document.createElement("p");
completionNote.className = "completionNote";
completionNote.textContent =
    "Completion time uses the browser’s local clock.";

var completionTime = document.createElement("p");
completionTime.className = "completionTime";

var playAgainButton = document.createElement("button");
playAgainButton.type = "button";
playAgainButton.className = "primaryButton playAgainButton";
playAgainButton.textContent = "Play Again";

completionScreen.appendChild(completionHeader);
completionScreen.appendChild(completionArtwork);
completionScreen.appendChild(completionGreeting);
completionScreen.appendChild(completionTime);
completionScreen.appendChild(finalScoreLabel);
completionScreen.appendChild(finalScore);
completionScreen.appendChild(playAgainButton);
completionScreen.appendChild(completionNote);

document.body.insertBefore(
    completionScreen,
    quizContainerElement.nextSibling
);

// ==================================================
// ANSWER STATE
// ==================================================

function saveSelectedAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;

    quizMessageElement.style.display = "none";
    saveQuizSession("quiz");
}

// ==================================================
// WELCOME AND AUTHENTICATION FLOW
// ==================================================

function startQuiz() {
    var enteredName = userNameInput.value.trim().slice(0, 20);

    if (enteredName === "") {
        nameMessage.textContent = "Please enter your name.";
        userNameInput.focus();
        return;
    }

    learnerFullName = enteredName;
    nameMessage.textContent = "";

    if (accessMode === "open") {
        beginQuizSession();
        return;
    }

    if (accessMode !== "individual" && accessMode !== "group") {
        nameMessage.textContent =
            "The quiz access mode is not configured correctly.";
        return;
    }

    welcomeScreen.style.display = "none";
    completionScreen.style.display = "none";
    quizContainerElement.style.display = "none";

    authScreen.style.display = "block";
    authNameDisplay.textContent = "Learner: " + learnerFullName;
    authMessage.textContent = "";
    passcodeInput.value = "";

    if (accessMode === "group") {
        groupNameInput.value = "";
        groupNameInput.focus();
    } else {
        passcodeInput.focus();
    }
}

function attemptAuthentication() {
    if (accessMode === "open") {
        beginQuizSession();
        return;
    }

    if (
        typeof QuizAuth === "undefined" ||
        typeof QuizAuth.authenticate !== "function"
    ) {
        authMessage.textContent =
            "Authentication could not start. Please contact your quiz administrator.";
        return;
    }

    var credentialName = accessMode === "individual"
        ? learnerFullName
        : groupNameInput.value.trim();

    if (accessMode === "group" && credentialName === "") {
        authMessage.textContent = "Please enter your group name.";
        groupNameInput.focus();
        return;
    }

    if (passcodeInput.value === "") {
        authMessage.textContent = "Please enter your passcode.";
        passcodeInput.focus();
        return;
    }

    var result = QuizAuth.authenticate({
        mode: accessMode,
        accessId: accessId,
        name: credentialName,
        passcode: passcodeInput.value
    });

    if (!result.success) {
        authMessage.textContent = result.message;
        passcodeInput.select();
        passcodeInput.focus();
        return;
    }

    authMessage.textContent = "";
    passcodeInput.value = "";
    authScreen.style.display = "none";

    beginQuizSession();
}

function returnToWelcome() {
    // Leaving the current attempt deliberately ends its session.
    clearSavedQuizSession();

    authScreen.style.display = "none";
    completionScreen.style.display = "none";
    quizContainerElement.style.display = "none";
    welcomeScreen.style.display = "block";

    userNameInput.value = learnerFullName;
    nameMessage.textContent = "";
    authMessage.textContent = "";
    passcodeInput.value = "";

    if (accessMode === "group") {
        groupNameInput.value = "";
    }

    userNameInput.focus();
}

function beginQuizSession() {
    // Starting deliberately creates a fresh attempt.
    questions = baseQuesti
