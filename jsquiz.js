var questions = [
    {
        question: "What is the capital of Oti region?",
        choices: ["Goaso", "Dzemeni", "Dambai", "Damango", "Techiman", "Apegusu", "Ho"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Bono East Region?",
        choices: ["Sefwi Wiawso", "Goaso", "Sekondi-Takoradi", "Nalerigu", "Damango", "Techiman", "Dambai"],
        correctAnswer: 5
    },
    {
        question: "What is the capital of Ahafo Region?",
        choices: ["Goaso", "Sefwi Wiawso", "Koforidua", "Sekondi-Takoradi", "Sunyani", "Damango", "Techiman"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Bono region?",
        choices: ["Sefwi Wiawso", "Goaso", "Sekondi-Takoradi", "Ho", "Sunyani", "Koforidua", "Techiman"],
        correctAnswer: 4
    },
    {
        question: "What is the capital of North East region?",
        choices: ["Bolgatanga", "Wa", "Dambai", "Nalerigu", "Damango", "Tamale", "Navrongo"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Savannah region?",
        choices: ["Goaso", "Damango", "Sefwi Wiawso", "Wa", "Techiman", "Dambai", "Sunyani"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Western North region?",
        choices: ["Nalerigu", "Techiman", "Wa", "Damango", "Bolgatanga", "Sunyani", "Sefwi Wiawso"],
        correctAnswer: 6
    },
    {
        question: "What is the capital of Western region?",
        choices: ["Cape Coast", "Sefwi Wiawso", "Sekondi-Takordi", "Sunyani", "Kasoa", "Techiman", "Asamankese"],
        correctAnswer: 2
    },
    {
        question: "What is the capital of Volta region?",
        choices: ["Kpejei", "Sogakope", "Peki", "Anloga", "Ho", "Hogbetsotso", "Hohoe"],
        correctAnswer: 4
    },
    {
        question: "What is the capital of Greater Accra region?",
        choices: ["Accra", "Tema", "Kasoa", "Osu", "Achimota", "Dansoman", "James Town"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Eastern region?",
        choices: ["Komenda", "Techiman", "Asamakese", "Kwahu", "Suhum", "Koforidua", "Sekondi-Takoradi"],
        correctAnswer: 5
    },
    {
        question: "What is the capital of Ashanti region?",
        choices: ["Asamankese", "Kumasi", "Kejetia", "Asankragua", "Sunyani", "Oyokoo", "Denkyira"],
        correctAnswer: 1
    },
    {
        question: "What is the capital of Central region?",
        choices: ["Sekondi-Takoradi", "Kasoa", "Swedru", "Kotokuraba", "Cape Coast", "Koforidua", "Suhum"],
        correctAnswer: 4
    },
    {
        question: "What is the capital of Northern region?",
        choices: ["Tamale", "Nalerigu", "Bolgatanga", "Wa", "Dambai", "Bawku", "Navrongo"],
        correctAnswer: 0
    },
    {
        question: "What is the capital of Upper East region?",
        choices: ["Nalerigu", "Tamale", "Wa", "Bolgatanga", "Bawku", "Damango", "Navrongo"],
        correctAnswer: 3
    },
    {
        question: "What is the capital of Upper West region?",
        choices: ["Bolgatanga", "Nalerigu", "Techiman", "Bawku", "Damango", "Navrongo", "Wa"],
        correctAnswer: 6
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