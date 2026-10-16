
/* ==================================================
   STUDENTS COMPANION — MASTER QUIZ ENGINE
   Includes configurable access authentication.
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
// QUIZ STATE
// ==================================================

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var learnerFullName = "";
var completionTimestamp = "";

shuffleArray(questions);

// ==================================================
// PAGE ELEMENTS
// ==================================================

var quizContainerElement = document.querySelector(".quizContainer");
var questionElement = document.querySelector(".question");
var choiceListElement = document.querySelector(".choiceList");
var quizMessageElement = document.querySelector(".quizMessage");
var resultElement = document.querySelector(".result");
var nextButtonElement = document.querySelector(".nextButton");
var previousButtonElement = document.querySelector(".previousButton");
var userAnswers = {};

// ==================================================
// ACCESS CONFIGURATION
// ==================================================

var accessMode = quizConfig.accessMode || "open";
var accessId = quizConfig.accessId || quizConfig.title || "default-quiz";

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

    if (typeof QuizAuth === "undefined" ||
        typeof QuizAuth.authenticate !== "function") {
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
    welcomeScreen.style.display = "none";
    authScreen.style.display = "none";
    completionScreen.style.display = "none";
    quizContainerElement.style.display = "block";

    greetingElement.textContent =
        "Good Luck, " + learnerFullName.split(/\s+/)[0] + "!";

    currentQuestion = 0;
    correctAnswers = 0;
    userAnswers = {};
    quizOver = false;
    completionTimestamp = "";

    nextButtonElement.textContent = "Next Question";
    nextButtonElement.disabled = false;
    previousButtonElement.disabled = true;

    resultElement.style.display = "none";
    quizMessageElement.style.display = "none";

    shuffleArray(questions);
    displayCurrentQuestion();
}

startQuizButton.addEventListener("click", startQuiz);

userNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        startQuiz();
    }
});

authenticateButton.addEventListener(
    "click",
    attemptAuthentication
);

passcodeInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        attemptAuthentication();
    }
});

groupNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        if (passcodeInput.value === "") {
            passcodeInput.focus();
        } else {
            attemptAuthentication();
        }
    }
});

backToWelcomeButton.addEventListener("click", returnToWelcome);

// ==================================================
// DISPLAY CURRENT QUESTION
// ==================================================

function displayCurrentQuestion() {
    if (currentQuestion >= questions.length) return;

    var question = questions[currentQuestion];

    questionElement.textContent = question.question;

    progressCounter.textContent =
        "Q " + (currentQuestion + 1) + "/" + questions.length;

    progressCounter.setAttribute(
        "aria-label",
        "Question " + (currentQuestion + 1) +
        " of " + questions.length
    );

    choiceListElement.innerHTML = "";
    quizMessageElement.style.display = "none";

    previousButtonElement.disabled = currentQuestion === 0;

    nextButtonElement.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";

    var choicesWithIndex = question.choices.map(function (choice, index) {
        return {
            choice: choice,
            index: index
        };
    });

    shuffleArray(choicesWithIndex);

    choicesWithIndex.forEach(function (item, position) {
        var li = document.createElement("li");
        var radio = document.createElement("input");
        var label = document.createElement("label");

        var radioId = "answer_" + currentQuestion + "_" + position;

        radio.type = "radio";
        radio.value = String(item.index);
        radio.name = "dynradio";
        radio.id = radioId;
        radio.className = "answerRadio";

        label.htmlFor = radioId;
        label.textContent =
            String.fromCharCode(65 + position) + ".  " + item.choice;
        label.className = "answerLabel";

        if (userAnswers[currentQuestion] === item.index) {
            radio.checked = true;
        }

        li.appendChild(radio);
        li.appendChild(label);
        choiceListElement.appendChild(li);

        li.addEventListener("click", function (event) {
            if (event.target !== radio) {
                radio.checked = true;
            }
        });
    });
}

// ==================================================
// ANSWER AND SCORE HANDLING
// ==================================================

function getSelectedAnswer() {
    var selected = document.querySelector(
        "input[name='dynradio']:checked"
    );

    return selected ? selected.value : undefined;
}

function displayScore() {
    resultElement.textContent =
        "You scored: " + correctAnswers + " out of " + questions.length;

    resultElement.style.display = "block";
}

function finishQuiz() {
    quizOver = true;
    correctAnswers = 0;

    questions.forEach(function (question, index) {
        if (userAnswers[index] === question.correctAnswer) {
            correctAnswers++;
        }
    });

    completionTimestamp = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
    });

    displayScore();

    completionGreeting.textContent = learnerFullName;
    finalScore.textContent = correctAnswers + " / " + questions.length;
    completionTime.textContent = "Completed at " + completionTimestamp;

    quizContainerElement.style.display = "none";
    completionScreen.style.display = "block";
}

nextButtonElement.addEventListener("click", function () {
    if (quizOver) return;

    var selectedAnswer = getSelectedAnswer();

    if (selectedAnswer === undefined) {
        quizMessageElement.textContent = "Please select an answer.";
        quizMessageElement.style.display = "block";
        return;
    }

    userAnswers[currentQuestion] = parseInt(selectedAnswer, 10);
    quizMessageElement.style.display = "none";

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayCurrentQuestion();
    } else {
        finishQuiz();
    }
});

previousButtonElement.addEventListener("click", function () {
    if (quizOver || currentQuestion === 0) return;

    var selectedAnswer = getSelectedAnswer();

    if (selectedAnswer !== undefined) {
        userAnswers[currentQuestion] = parseInt(selectedAnswer, 10);
    }

    currentQuestion--;
    displayCurrentQuestion();
});

// ==================================================
// REPLAY
// ==================================================

playAgainButton.addEventListener("click", function () {
    if (accessMode === "open") {
        userNameInput.value = learnerFullName;
        beginQuizSession();
        return;
    }

    // Restricted quizzes must authenticate again for a new use.
    returnToWelcome();
});

// ==================================================
// INITIAL STATE
// ==================================================

quizMessageElement.style.display = "none";
resultElement.style.display = "none";
