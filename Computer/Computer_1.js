var questions = [
    {
        question: "Sarah wants to learn about the period when microprocessors were first introduced, revolutionizing computers. Which generation of computers should she study, covering the years 1971–1980?",
        choices: ["First generation", "Second generation", "Third generation", "Fourth generation"],
        correctAnswer: 3
    },
    {
        question: "John is curious about the technology that made modern personal computers possible — microprocessors with millions of transistors on a single chip. Which computer generation introduced this technology?",
        choices: ["Second generation", "Third generation", "Fourth generation", "Fifth generation"],
        correctAnswer: 2
    },
    {
        question: "A tech company is developing super-intelligent systems capable of complex decision-making and learning. These computers use Ultra Large Scale Integration (ULSI) technology. Which generation of computers are they working with?",
        choices: ["Second generation", "Third generation", "Fourth generation", "Fifth generation"],
        correctAnswer: 3
    },
    {
        question: "Daniel is researching fifth-generation computers for his project. Which feature is NOT characteristic of these advanced systems?",
        choices: ["Use Ultra Large Scale Integration (ULSI) technology", "They work with artificial intelligence", "They solve complex tasks like decision-making and reasoning", "They do not use solid-state drives"],
        correctAnswer: 3
    },
    {
        question: "Maria heard about a powerful type of computing that uses qubits to perform complex calculations at lightning speed. What is this field called?",
        choices: ["Sycamore Computing", "Quantum computing", "Perceptual Computing", "Sensor Computing"],
        correctAnswer: 1
    },
    {
        question: "A supermarket wants to speed up checkout by minimizing human data entry. Which type of device should they use?",
        choices: ["Manual data entry devices", "Direct data entry devices", "Direct storage devices", "ATM"],
        correctAnswer: 1
    },
    {
        question: "Which of the following devices would NOT help a hospital automate patient data entry?",
        choices: ["Graphic Tablet", "Magnetic Card Reader", "Optical Card Reader", "Optical mouse"],
        correctAnswer: 3
    },
    {
        question: "Lisa is designing a secure payment system for a store. She decides to use chip readers. Which of the following is NOT a benefit of chip readers?",
        choices: ["More secure than magnetic stripe systems", "Can lower fraud-related losses", "Promotes contactless payments", "Contents can be seen by multiple users"],
        correctAnswer: 3
    },
    {
        question: "Jake, an artist, wants to draw illustrations directly on his computer screen with a special pen. Which device should he get?",
        choices: ["Graphics tablet", "Stylus", "Scanner", "Felt pen"],
        correctAnswer: 0
    },
    {
        question: "In a bookstore, each item has a square-shaped code that customers can scan with their phones to get product information. What is this type of code called?",
        choices: ["Quick Response Code (QR Code)", "Barcode reader", "Hand scanner", "Pen scanner"],
        correctAnswer: 0
    },
    {
        question: "A teacher wants to quickly grade multiple-choice exams by scanning student answer sheets. Which device should she use?",
        choices: ["Pen scanner", "Hand scanner", "Barcode reader", "Optical mark reader"],
        correctAnswer: 3
    },
    {
        question: "A logistics company uses small tags on packages to track their movement. A device emits radio waves and reads signals back from the tags. What is this system called?",
        choices: ["Radius Frequency Identification", "Radio Frequency Identification", "Radio Frequent Identification", "Radio Frequency Identification Desk"],
        correctAnswer: 1
    },
    {
        question: "Which device should a designer use to hand-draw images, animations, and graphics on a screen using a pen-like stylus?",
        choices: ["Graphics tablet", "Stylus", "Projector", "Plotter"],
        correctAnswer: 0
    },
    {
        question: "During a tech workshop, the instructor mentions RFID. What does RFID stand for?",
        choices: ["Radius Frequency Identification", "Radio Frequency Identification", "Radio Frequent Identification", "Radio Frequency Identification Desk"],
        correctAnswer: 1
    },
    {
        question: "A warehouse manager wants to improve inventory tracking. They are considering using RFID tags. Which of the following is NOT an advantage of RFID?",
        choices: ["Helps track assets and manage inventory", "Uses silicon chips, which are cheaper", "Tags store more information than barcodes", "Improves data accuracy and availability"],
        correctAnswer: 1
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