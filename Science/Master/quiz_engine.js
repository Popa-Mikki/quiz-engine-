// Shuffle questions when quiz starts.
shuffleArray(questions);


// ==================================================
// QUIZ VARIABLES
// ==================================================

var currentQuestion = 0;

var correctAnswers = 0;

var quizOver = false;


// ==================================================
// PAGE ELEMENTS
// ==================================================

var questionElement = document.querySelector(".question");

var choiceListElement = document.querySelector(".choiceList");

var quizMessageElement = document.querySelector(".quizMessage");

var resultElement = document.querySelector(".result");

var nextButtonElement = document.querySelector(".nextButton");


/* =========================================
   WELCOME SCREEN — STEP 1
   Create the welcome screen using JavaScript
   ========================================= */

// Find the main quiz container.
var quizContainerElement = document.querySelector(".quizContainer");

// Create the welcome screen container.
var welcomeScreen = document.createElement("div");
welcomeScreen.className = "welcomeScreen";


/* BRAND IDENTITY — Students Companion */

// Brand name
var brandName = document.createElement("div");
brandName.className = "brandName";
brandName.textContent = "Students Companion";

// Brand descriptor
var brandDescriptor = document.createElement("div");
brandDescriptor.className = "brandDescriptor";
brandDescriptor.textContent = "THE HOUSE OF LEARNING";

// Brand motto
var brandMotto = document.createElement("div");
brandMotto.className = "brandMotto";
brandMotto.textContent = "Learn Today. Rise Tomorrow.";

// Create the welcome heading.
var welcomeHeading = document.createElement("h2");
welcomeHeading.textContent = "Welcome!";

// Create the name prompt.
var namePrompt = document.createElement("label");
namePrompt.textContent = "What is your name?";
namePrompt.htmlFor = "userName";

// Create the name input field.
var userNameInput = document.createElement("input");
userNameInput.type = "text";
userNameInput.id = "userName";
userNameInput.maxLength = 20;
userNameInput.placeholder = "Enter your name";
userNameInput.autocomplete = "given-name";

// Create the Start Quiz button.
var startQuizButton = document.createElement("button");
startQuizButton.type = "button";
startQuizButton.textContent = "Start Quiz";

// Create a space for validation messages.
var nameMessage = document.createElement("p");
nameMessage.className = "nameMessage";

// Assemble the welcome screen.
welcomeScreen.appendChild(brandName);
welcomeScreen.appendChild(brandDescriptor);
welcomeScreen.appendChild(brandMotto);
welcomeScreen.appendChild(welcomeHeading);
welcomeScreen.appendChild(namePrompt);
welcomeScreen.appendChild(userNameInput);
welcomeScreen.appendChild(startQuizButton);
welcomeScreen.appendChild(nameMessage);

// Place the welcome screen immediately before the quiz.
document.body.insertBefore(welcomeScreen, quizContainerElement);

// Hide the quiz until the learner starts.
quizContainerElement.style.display = "none";


/* =========================================
   WELCOME SCREEN — STEP 2
   Handle the Start Quiz button
   ========================================= */

startQuizButton.addEventListener("click", function () {

    // Read the learner's name and remove extra spaces.
    var learnerName = userNameInput.value.trim().slice(0, 20);

    // Do not continue if the name field is empty.
    if (learnerName === "") {
        nameMessage.textContent = "Please enter your name.";
        userNameInput.focus();
        return;
    }

    // Clear any previous validation message.
    nameMessage.textContent = "";

    // Hide the welcome screen.
    welcomeScreen.style.display = "none";

    // Create the personalized greeting.
    var greetingElement = document.createElement("h2");
    greetingElement.className = "greeting";
    greetingElement.textContent = "Good Luck, " + learnerName + "!";

    // Place the greeting immediately above the quiz.
    document.body.insertBefore(
        greetingElement,
        quizContainerElement
    );

    // Reveal the quiz container.
    quizContainerElement.style.display = "block";

    // Display the first question only after the learner starts.
    displayCurrentQuestion();

});


// ==================================================
// DISPLAY CURRENT QUESTION
// ==================================================

function displayCurrentQuestion() {

    var question = questions[currentQuestion];

    questionElement.textContent = question.question;

    choiceListElement.innerHTML = "";


    // Create choices while preserving their original indexes.

    var choicesWithIndex = question.choices.map(function(choice, index) {

        return {
            choice: choice,
            index: index
        };

    });


    // Shuffle the choices.

    shuffleArray(choicesWithIndex);


    // Create each answer.

    choicesWithIndex.forEach(function(item) {

        var li = document.createElement("li");

        var radio = document.createElement("input");

        radio.type = "radio";

        radio.value = item.index;

        radio.name = "dynradio";


        // Create a unique ID for the radio button.

        radio.id = "answer_" + item.index;


        // Create label for better touch interaction.

        var label = document.createElement("label");

        label.htmlFor = radio.id;

        label.textContent = item.choice;

        label.style.cursor = "pointer";

        label.style.touchAction = "manipulation";


        li.appendChild(radio);

        li.appendChild(label);

        choiceListElement.appendChild(li);


        // Allow the entire answer row to be tapped.

        li.addEventListener("click", function(event) {

            // If the user tapped the radio button itself,
            // the browser will handle the selection.

            if (event.target !== radio) {

                radio.checked = true;
            }

        });

    });
}


// ==================================================
// RESET QUIZ
// ==================================================

function resetQuiz() {

    currentQuestion = 0;

    correctAnswers = 0;

    quizOver = false;

    resultElement.style.display = "none";

    quizMessageElement.style.display = "none";

    shuffleArray(questions);
}


// ==================================================
// DISPLAY SCORE
// ==================================================

function displayScore() {

    resultElement.textContent =
        "You scored: " +
        correctAnswers +
        " out of: " +
        questions.length;

    resultElement.style.display = "block";
}


// ==================================================
// GET SELECTED ANSWER
// ==================================================

function getSelectedAnswer() {

    var selected =
        document.querySelector("input[name='dynradio']:checked");

    return selected ? selected.value : undefined;
}


// ==================================================
// NEXT BUTTON
// ==================================================

nextButtonElement.addEventListener("click", function() {

    if (!quizOver) {

        var value = getSelectedAnswer();


        // No answer selected.

        if (value === undefined) {

            quizMessageElement.textContent =
                "Please select an answer";

            quizMessageElement.style.display = "block";

        } else {

            quizMessageElement.style.display = "none";


            // Check answer.

            if (
                parseInt(value, 10) ===
                questions[currentQuestion].correctAnswer
            ) {

                correctAnswers++;
            }


            currentQuestion++;


            // More questions remain.

            if (currentQuestion < questions.length) {

                displayCurrentQuestion();

            } else {

                displayScore();

                nextButtonElement.textContent =
                    "Quiz Ended";

                quizOver = true;
            }
        }

    } else {

        // Quiz has ended. No further action.

        return;

    }

});


// ==================================================
// INITIAL STATE
// ==================================================

quizMessageElement.style.display = "none";

resultElement.style.display = "none";
