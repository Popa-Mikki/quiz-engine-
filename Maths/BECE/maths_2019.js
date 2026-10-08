var questions = [
    {
        question: "Given that A = {2, 4, 6, 8, 10} and B = {4, 8, 12}, find A ∪ B.",
        choices: ["{4, 8}", "{2, 8, 12}", "{4, 6, 8, 12}", "{2, 4, 6, 8, 10, 12}"],
        correctAnswer: 3
    },
    {
        question: "Express 0.000344 in standard form.",
        choices: ["3.44 × 10⁻⁶", "3.44 × 10⁻⁵", "3.44 × 10⁻⁴", "3.44 × 10⁻³"],
        correctAnswer: 2
    },
    {
        question: "Which of the following numbers is the largest?",
        choices: ["-70", "-50", "-3", "-2"],
        correctAnswer: 3
    },
    {
        question: "Correct 0.024561 to three significant figures.",
        choices: ["0.03", "0.025", "0.0245", "0.0246"],
        correctAnswer: 3
    },
    {
        question: "Simplify: (7⁵ × 7³) ÷ 7⁶.",
        choices: ["7⁹", "7⁴", "7³", "7²"],
        correctAnswer: 3
    },
    {
        question: "How many lines of symmetry has a square?",
        choices: ["0", "1", "2", "4"],
        correctAnswer: 3
    },
    {
        question: "Solve the equation 10 - ((x + 3) / 2) = 8.",
        choices: ["-9", "-3", "1", "15"],
        correctAnswer: 2
    },
    {
        question: "Factorize: kx + 2xt - 4k - 8t.",
        choices: ["(k - 2t)(x + 4)", "(k + 2t)(x + 4)", "(k + t)(x - 4)", "(k + 2t)(x - 4)"],
        correctAnswer: 3
    },
    {
        question: "There are 12 boys and 18 girls in a class. Find the fraction of boys in the class.",
        choices: ["2/5", "3/5", "2/3", "3/4"],
        correctAnswer: 0
    },
    {
        question: "Express 30% as a fraction in its lowest term.",
        choices: ["7/10", "3/20", "7/20", "3/10"],
        correctAnswer: 3
    },
    {
        question: "Make k the subject of the relation: ky - k = y².",
        choices: ["k = y² / (y - 1)", "k = y² / (y + 1)", "k = -y² / (y + 1)", "k = (y² + 1) / (y - 1)"],
        correctAnswer: 0
    },
    {
        question: "The mean of the numbers 5, 2x, 4 and 3 is 5. Find the value of x.",
        choices: ["3", "4", "5", "8"],
        correctAnswer: 1
    },
    {
        question: "Using the mapping (1→3, 2→1, 3→-1, 4→-3, 5→-5), find the rule of the mapping.",
        choices: ["y = 2x + 2", "y = -2x + 2", "y = 4x", "y = -2x + 5"],
        correctAnswer: 3
    },
    {
        question: "The two sides of a parallelogram are 4.8 m and 7.2 m long. Find its perimeter.",
        choices: ["48.0 m", "34.6 m", "24.0 m", "17.3 m"],
        correctAnswer: 2
    },
    {
        question: "A tank in the form of a cuboid has length 6 m and breadth 4 m. If the volume of the tank is 36 m³, find the height.",
        choices: ["0.67 m", "1.5 m", "1.8 m", "5.0 m"],
        correctAnswer: 1
    },
    {
        question: "If the bearing of A from B is 240°, find the bearing of B from A.",
        choices: ["040°", "060°", "120°", "300°"],
        correctAnswer: 1
    },
    {
        question: "Find the truth set of the inequality 2y + 5 < 4y - 5.",
        choices: ["{y : y > 5}", "{y : y < 5}", "{y : y > 1}", "{y : y > 0}"],
        correctAnswer: 0
    },
    {
        question: "Find the gradient of the straight line which passes through the points (-3, 4) and (3, -2).",
        choices: ["2", "1", "-2", "-1"],
        correctAnswer: 3
    },
    {
        question: "If 6 : 8 = r : 48, find the value of r.",
        choices: ["36", "34", "14", "12"],
        correctAnswer: 0
    },
    {
        question: "In an isosceles triangle PQR with equal sides PQ and QR, where point S lies on PR and angle QRS is 35°, find angle QPS.",
        choices: ["70°", "40°", "35°", "20°"],
        correctAnswer: 1
    },
    {
        question: "A man travelled a distance of 8 km in an hour. How long will it take him to cover a distance of 12 km, travelling at the same speed?",
        choices: ["1⅓ hrs", "1½ hrs", "1¾ hrs", "2 hrs"],
        correctAnswer: 1
    },
    {
        question: "A number is selected at random from 25, 26, 27, 28, ..., 35. Find the probability that the number selected is a prime number.",
        choices: ["6/11", "3/11", "2/11", "1/11"],
        correctAnswer: 2
    },
    {
        question: "Express 12/25 in decimal fraction.",
        choices: ["0.0408", "0.048", "0.408", "0.48"],
        correctAnswer: 3
    },
    {
        question: "Find the diameter of a circle whose circumference is 88 cm. [take π = 22/7]",
        choices: ["14 cm", "22 cm", "28 cm", "20 cm"],
        correctAnswer: 2
    },
    {
        question: "When twelve is subtracted from three times a certain number and the result is divided by four, the answer is eighteen. Find the number.",
        choices: ["84", "40", "28", "20"],
        correctAnswer: 2
    },
    {
        question: "In the diagram, line MN is parallel to line TU, line TS cuts line MN at O and angle MOS = 115°. Find angle OTU.",
        choices: ["65°", "55°", "45°", "25°"],
        correctAnswer: 0
    },
    {
        question: "Given that r = (-3, -5) and t = (3, -5), find r + t.",
        choices: ["(-6, 10)", "(-6, -10)", "(0, -10)", "(6, 10)"],
        correctAnswer: 2
    },
    {
        question: "A trader sold 90 oranges at 3 for GH¢ 0.75. How much did she get from selling all the oranges?",
        choices: ["GH¢ 22.50", "GH¢ 67.50", "GH¢ 75.00", "GH¢ 225.50"],
        correctAnswer: 0
    },
    {
        question: "Express 72 as a product of prime factors.",
        choices: ["2³ × 3²", "2² × 3³", "2² × 3²", "2 × 3"],
        correctAnswer: 0
    },
    {
        question: "Simplify: 3a × 24ab.",
        choices: ["27ab²", "27a²b", "72ab²", "72a²b"],
        correctAnswer: 3
    },
    {
        question: "Simplify: (-2, 3) + (-1, 5) in vector column form.",
        choices: ["(-3, 2)", "(-1, 2)", "(-3, 8)", "(-1, -2)"],
        correctAnswer: 2
    },
    {
        question: "Multiply 247 by 32.",
        choices: ["6916", "7804", "7904", "1235"],
        correctAnswer: 2
    },
    {
        question: "Evaluate: (0.07 × 0.02) ÷ 14.",
        choices: ["0.01", "0.001", "0.0001", "0.00001"],
        correctAnswer: 2
    },
    {
        question: "In a class of 23 students, the girls were 7 more than the boys. How many boys were in the class?",
        choices: ["8", "15", "16", "30"],
        correctAnswer: 0
    },
    {
        question: "Express 30 minutes as a percentage of 3 hours 20 minutes.",
        choices: ["12.5 %", "15 %", "16⅔ %", "20 %"],
        correctAnswer: 1
    },
    {
        question: "Find the Least Common Multiple (LCM) of 2, 3 and 5.",
        choices: ["6", "12", "24", "30"],
        correctAnswer: 3
    },
    {
        question: "The simple interest on GH¢ 450.00 for 4 years is GH¢ 45.00, find the rate of interest.",
        choices: ["2.5 %", "10 %", "25 %", "6.5 %"],
        correctAnswer: 0
    },
    {
        question: "Find the median of the following numbers: 46, 68, 34, 37, 76 and 81.",
        choices: ["35.5", "57", "67", "68"],
        correctAnswer: 1
    },
    {
        question: "In a Venn diagram with sets M and N, where M contains {5, 1, 8}, the intersection M ∩ N contains {2, 7}, and N only contains {1, 4, 6, 9}, find M ∩ N.",
        choices: ["{7}", "{2, 7}", "{3, 5, 8}", "{1, 2, 3, 4, 5, 6, 7, 8, 9}"],
        correctAnswer: 1
    },
    {
        question: "Using the same Venn diagram, how many members are in the set N?",
        choices: ["2", "3", "4", "6"],
        correctAnswer: 3
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