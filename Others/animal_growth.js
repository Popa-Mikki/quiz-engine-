var questions = [
    {
        question: "What is the baby of a Moth known as?",
        choices: ["baby", "infant", "kit", "larva", "pupa", "nymph", "mite"],
        correctAnswer: 3
    }, {
        question: "What is the adult of a kid called?",
        choices: ["calf", "doe", "goat", "chick", "kit", "cub", "fawn"],
        correctAnswer: 2
    }, {
        question: "What is the young of Bufallo called?",
        choices: ["calf", "baby", "pup", "cow", "kit", "cub", "fawn"],
        correctAnswer: 0
    }, {
        question: "What is a baby Aligator called?",
        choices: ["gecko", "gator", "hatchling", "calf", "kit", "cub", "fawn"],
        correctAnswer: 2
    }, {
        question: "What is a baby Goose called?",
        choices: ["gooser", "gosling", "gup", "gander", "kit", "cub", "fawn"],
        correctAnswer: 1
    }, {
        question: "What is a baby Hamster called?",
        choices: ["pup", "chick", "ham", "billy", "kit", "cub", "fawn"],
        correctAnswer: 0
    }, {
        question: "What is a baby Hawk called?",
        choices: ["hawklet", "larva", "eyas", "nestling", "kit", "cub", "fawn"],
        correctAnswer: 2
    }, {
        question: "What is a baby Grasshopper called?",
        choices: ["pupa", "nymph", "hopper", "flyer", "kit", "cub", "fawn"],
        correctAnswer: 1
    }, {
        question: "What is a baby Kangaroo called?",
        choices: ["Kinga", "joey", "colt", "skunk", "kit", "cub", "fawn"],
        correctAnswer: 1
    }, {
        question: "What is a baby Whale called?",
        choices: ["grub", "wharf", "whala", "calf", "kit", "cub", "fawn"],
        correctAnswer: 3
    }, {
        question: "What is a baby Monkey called?",
        choices: ["infant", "baby", "grub", "monklet", "kit", "cub", "fawn"],
        correctAnswer: 0
    }, {
        question: "What is a baby Bear called?",
        choices: ["cub", "bearlet", "lumbda", "beret", "kit", "cub", "fawn"],
        correctAnswer: 0
    }
];


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
                    "Play Again?";

                quizOver = true;
            }
        }

    } else {

        // Restart quiz.

        resetQuiz();

        displayCurrentQuestion();

        nextButtonElement.textContent =
            "Next Question";
    }

});


// ==================================================
// INITIAL STATE
// ==================================================

quizMessageElement.style.display = "none";

resultElement.style.display = "none";

displayCurrentQuestion();