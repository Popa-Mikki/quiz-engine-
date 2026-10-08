var questions = [
    {
        question: "An example of mixtures that can be separated by the method of filtration is (BECE 2017, q19)",
        choices: ["sugar in water", "sand in water", "oil in water", "ink in water"],
        correctAnswer: 1
    }, {
        question: "Which of the following substances is a mixture? (BECE 2017, q 16)",
        choices: ["Water", "Sodium chloride", "Salt solution", "Iron filing"],
        correctAnswer: 2
    }, {
        question: "Which of the following is not required in the process of distillation in the laboratory? (BECE 2017, q 11)",
        choices: ["Condenser", "Evaporating dish", "Bunsen burner", "Round bottom flask"],
        correctAnswer: 1
    }, {
        question: "A mixture of sugar and water could be separated by ____________. (BECE 2016, q 27)",
        choices: ["decantation", "evaporation", "filtration", "sublimation"],
        correctAnswer: 1
    }, {
        question: "The solvent which is most effective in washing bitumen from the hand is (BECE 2015, q 9)",
        choices: ["Acid", "Alcohol", "kerosene", "Water"],
        correctAnswer: 2
    }, {
        question: "Which of the following processes is used to separate insoluble solids from liquids? (BECE 2014, q 19)",
        choices: ["Crystallisation", "Evaporation", "Filtration", "Sublimation"],
        correctAnswer: 2
    }, {
        question: "Which of the following substances is a solid-gas mixture? (BECE 2014, q 15)",
        choices: ["Lather", "Bronze", "Steel", "Smoke"],
        correctAnswer: 3
    }, {
        question: "Air is an example of a ____________. (BECE 2013, q 4)",
        choices: ["gas in gas mixture", "liquid in liquid mixture", "solid in liquid mixture", "solid in solid mixture"],
        correctAnswer: 0
    }, {
        question: "When a solid-liquid mixture is filtered, the liquid that separates out into the container is called (BECE 2012, q 6)",
        choices: ["filtrate", "residue", "sediment", "solution"],
        correctAnswer: 0
    }, {
        question: "The following substances are mixtures except ____________. (BECE 2008, q 25)",
        choices: ["air", "carbon dioxide", "salt solution", "smoke"],
        correctAnswer: 1
    }, {
        question: "Which of these methods is used to separate insoluble solids from liquids? (BECE 2008, q 21)",
        choices: ["Distillation", "Evaporation", "Filtration", "Winnowing"],
        correctAnswer: 2
    }, {
        question: "If a mixture of water and powdered charcoal is allowed to stand for a long time, the charcoal ____________. (BECE 2007, q 22)",
        choices: ["rises to the top", "settles at the bottom", "dissolves completely in the water", "continues to remain suspended in the water"],
        correctAnswer: 1
    }, {
        question: "Common salt (sodium chloride) is obtained from sea water by ____________. (BECE 2006, q 21)",
        choices: ["condensation", "evaporation", "Precipitation", "sublimation"],
        correctAnswer: 1
    } , {
        question: "A solution in which no more solutes will dissolve at a given temperature is said to be (BECE 2005, q 21)",
        choices: ["concentrated", "dilute", "homogeneous", "saturated"],
        correctAnswer: 3
    }, {
        question: "The method used to separate an insoluble solid from a liquid is ____________. (BECE 2003, q 21)",
        choices: ["crystallisation", "distillation", "filtration", "sublimation"],
        correctAnswer: 2
    }, {
        question: "When oil and water are shaken together, they form a mixture called ____________. (BECE 2001, q 35)",
        choices: ["a solution", "an emulsion", "a solvent", "a suspension"],
        correctAnswer: 1
    }, {
        question: "The addition of more solvent to a solution makes the solution more ____________. (BECE 2000, q 35)",
        choices: ["dense", "dilute", "concentrated", "saturated"],
        correctAnswer: 1
    }, {
        question: "A mixture of sand and common salt could be separated by ____________. (BECE 1999, q 1)",
        choices: ["filtration and distillation", "dissolution and evaporation", "dissolution, sedimentation and evaporation", "dissolution, filtration and evaporation", "sedimentation and filtration"],
        correctAnswer: 3
    }, {
        question: "A mixture of engine oil and water could be best separated by ____________. (BECE 1998, q 15)",
        choices: ["evaporation", "freezing", "decantation", "heating"],
        correctAnswer: 2
    }, {
        question: "Which of the following processes should be carried out first when separating a mixture of sand and common salt? (BECE 1998, q 30)",
        choices: ["Crystallisation of the salt", "Dissolution of the salt", "Distillation of the solvent", "Filtration of the mixture"],
        correctAnswer: 1   
    }, {
        question: "Kerosene and petrol are obtained from crude oil by ____________. (BECE 1998, q 32)",
        choices: ["condensation of the crude oil", "decantation of the crude oil", "distillation of the crude oil", "evaporation of the crude oil"],
        correctAnswer: 2   
    }, {
        question: "Gin can be obtained from palm wine by ____________. (BECE 1995, q 36)",
        choices: ["condensation", "freezing", "sedimentation", "distillation"],
        correctAnswer: 3
    }, {
        question: "Which of the following mixtures can be separated by filtration? (BECE 1993, q 13)",
        choices: ["Salt in water", "Sugar in water", "Sand in water", "Oil in water"],
        correctAnswer: 2  
    }, {
        question: "A mixture of raw starch and water is best separated by ____________. (BECE 1993, q 29)",
        choices: ["boiling", "distillation", "decantation", "winnowing"],
        correctAnswer: 2
    }, {
        question: "Smoke is an example of a mixture of ____________. (BECE 1993, q 36)",
        choices: ["gases", "liquids in gases", "solids in liquids", "solids in gases"],
        correctAnswer: 3
    }, {
        question: "Which of the following methods will be most suitable for separating a mixture of iron filings and Sulphur powder? (BECE 1992, q 4)",
        choices: ["Winnowing", "Decanting", "Magnetization", "Evaporation"],
        correctAnswer: 2
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
