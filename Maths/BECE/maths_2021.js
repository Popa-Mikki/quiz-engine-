var questions = [
    {
        question: "If A = {1, 3, 5, 7, 9, 11, 13, 15} and B = {3, 6, 9, 12, 15}, find n(A ∪ B).",
        choices: ["3", "5", "10", "15"],
        correctAnswer: 2
    },
    {
        question: "If P = {4, 8, 12, 16, 20}, Q = {16, 4, 12, k, 20} and P = Q, find the value of k.",
        choices: ["20", "16", "8", "4"],
        correctAnswer: 2
    },
    {
        question: "Express 7352.4658 correct to three significant figures.",
        choices: ["7352465.8", "7352.47", "7350", "735"],
        correctAnswer: 2
    },
    {
        question: "Find the difference between the values of (2d)² and 2d², where d = 3.",
        choices: ["0", "18", "24", "54"],
        correctAnswer: 1
    },
    {
        question: "Find the image of P(-3, 5) when rotated through 360° about the origin.",
        choices: ["(5, -3)", "(-3, -5)", "(-3, 5)", "(-5, 3)"],
        correctAnswer: 2
    },
    {
        question: "The image of P(10, -3) when translated by the vector r is P'(4, 5). Find r.",
        choices: ["(14, 2)", "(6, -8)", "(-6, 8)", "(6, 8)"],
        correctAnswer: 2
    },
    {
        question: "Find the next two terms of the sequence: 2, 5, 10, 17, __, __.",
        choices: ["24, 35", "26, 35", "26, 37", "27, 38"],
        correctAnswer: 2
    },
    {
        question: "Express 134.78 correct to the nearest tenth.",
        choices: ["130.0", "134.7", "134.8", "135.0"],
        correctAnswer: 2
    },
    {
        question: "Kofi and Ama shared an amount of GHC 3,000.00 in the ratio 2:3. Find the amount received by Kofi.",
        choices: ["GHC 1,000.00", "GHC 1,200.00", "GHC 1,500.00", "GHC 1,800.00"],
        correctAnswer: 1
    },
    {
        question: "If 2x - 1 = 5, find the value of x.",
        choices: ["3", "4", "5", "6"],
        correctAnswer: 0
    },
    {
        question: "Solve: (1 - x) ÷ 3 < 4.",
        choices: ["x < -11", "x > -11", "x < 11", "x > 11"],
        correctAnswer: 1
    },
    {
        question: "The area of a rectangle is 18 cm². If one of its sides is 2 cm long, find its perimeter.",
        choices: ["18 cm", "20 cm", "22 cm", "36 cm"],
        correctAnswer: 2
    },
    {
        question: "A bag contains 5 red and 7 black balls of the same size. What is the probability of picking a black ball?",
        choices: ["5/7", "5/12", "7/12", "1/6"],
        correctAnswer: 2
    },
    {
        question: "On a map, 1/3 cm represents 5 km. If two towns A and B are 18 cm apart on the map, what is the actual distance between them?",
        choices: ["27 km", "30 km", "240 km", "270 km"],
        correctAnswer: 3
    },
    {
        question: "Using the mapping (1→5, 2→9, 3→13, 4→17, 5→21), what is the rule for the mapping?",
        choices: ["y = x + 4", "y = 3x + 2", "y = 4x + 1", "y = 5x + 1"],
        correctAnswer: 2
    },
    {
        question: "Using the mapping rule y = 4x + 1, find x when y = 37.",
        choices: ["6", "7", "8", "9"],
        correctAnswer: 3
    },
    {
        question: "Esi bought a television set of GHC 1,500.00. If she sold it at a profit of 20%, find the selling price.",
        choices: ["GHC 1,200.00", "GHC 1,500.00", "GHC 1,750.00", "GHC 1,800.00"],
        correctAnswer: 3
    },
    {
        question: "In a diagram where line AB is parallel to line PD, find the value of angle x.",
        choices: ["20°", "80°", "100°", "120°"],
        correctAnswer: 2
    },
    {
        question: "Make h the subject of the relation V = πr²h.",
        choices: ["h = V / (πr²)", "h = √(πr²)", "h = (πr²) / V", "h = (πr²)²"],
        correctAnswer: 0
    },
    {
        question: "Find the simple interest on GHC 600.00 which was saved for 8 months at 5% per annum.",
        choices: ["GHC 20.00", "GHC 40.00", "GHC 45.00", "GHC 240.00"],
        correctAnswer: 0
    },
    {
        question: "Priscilla's age is k years while Mary's age is b years. If Mary is 15 years older than Priscilla, which of the following statements is correct?",
        choices: ["2k + b = 15", "b - k = 15", "k - b = 15", "2b + k = 15"],
        correctAnswer: 1
    },
    {
        question: "What is the Highest Common Factor (HCF) of 24, 32 and 64?",
        choices: ["4", "6", "8", "16"],
        correctAnswer: 2
    },
    {
        question: "Factorize: 3ax + 6a - x - 2.",
        choices: ["(3a + 1)(x + 2)", "(3a + 1)(x - 2)", "3a(x - 2)", "(3a - 1)(x + 2)"],
        correctAnswer: 3
    },
    {
        question: "A car covered a distance of 150 km at a speed of 18 km/h. Find the time taken.",
        choices: ["7 hours 33 minutes", "7 hours 53 minutes", "8 hours 13 minutes", "8 hours 20 minutes"],
        correctAnswer: 3
    },
    {
        question: "Simplify 3y - ((2y - 3) / 4).",
        choices: ["10y + 3", "10y - 3", "(10y - 3) / 4", "(10y + 3) / 4"],
        correctAnswer: 3
    },
    {
        question: "Divide 0.5445 by 0.09.",
        choices: ["5.05", "6.05", "6.50", "60.5"],
        correctAnswer: 1
    },
    {
        question: "If the median of the numbers 9, 10, 12, x, 20 and 25 is 14, find the value of x.",
        choices: ["14", "16", "18", "22"],
        correctAnswer: 1
    },
    {
        question: "Expand (7r - 5)(3r + 4).",
        choices: ["21r² + 13r - 20", "21r² - 13r - 20", "21r² - 43r - 20", "21r² + 43r - 20"],
        correctAnswer: 0
    },
    {
        question: "Find the gradient of the line that joins the points A(-3, 5) and B(7, -2).",
        choices: ["10/7", "-5/12", "-7/10", "12/5"],
        correctAnswer: 2
    },
    {
        question: "The area of a trapezium is 36 cm². If the parallel sides are 10.5 cm and 9.5 cm, calculate the distance between the two parallel sides.",
        choices: ["1.0 cm", "1.8 cm", "3.2 cm", "3.6 cm"],
        correctAnswer: 3
    },
    {
        question: "If the average of 5, 6, 7 and x is 8, find the value of x.",
        choices: ["12", "14", "16", "24"],
        correctAnswer: 1
    },
    {
        question: "An amount of GHC 375,000.00 was needed to build a clinic for a community of twelve towns. Each community contributed GHC 25,000.00. If the District Assembly also contributed GHC 30,500.00, how much more is needed to build the clinic?",
        choices: ["GHC 44,500.00", "GHC 45,500.00", "GHC 34,500.00", "GHC 75,000.00"],
        correctAnswer: 0
    },
    {
        question: "Which property of arithmetic is shown in the equation (6 + x) + 5 = 6 + (x + 5)?",
        choices: ["Commutative", "Associative", "Closure", "Distributive"],
        correctAnswer: 1
    },
    {
        question: "A trader bought 100 tubers of yam for GHC n each. All the yams were sold at GHC m each. Find the profit.",
        choices: ["GHC 100(m - n)", "GHC 100(m + n)", "GHC 100(n - m)", "GHC 100(nm)"],
        correctAnswer: 0
    },
    {
        question: "A box can take 12 pencils. If 156 pencils are packed into such boxes, how many boxes will be fully packed?",
        choices: ["10", "11", "12", "13"],
        correctAnswer: 3
    },
    {
        question: "Given that x = 4, y = 7, evaluate 2xy + 3(x + y).",
        choices: ["79", "89", "99", "109"],
        correctAnswer: 1
    },
    {
        question: "Simplify 2(-1/2)² + (-1/2) - 1.",
        choices: ["-1", "0", "1", "2"],
        correctAnswer: 0
    },
    {
        question: "Given that x = 8, what type of angle is (9x + 8)°?",
        choices: ["Straight angle", "Obtuse angle", "Acute angle", "Right angle"],
        correctAnswer: 2
    },
    {
        question: "Express 0.725 as a fraction in its lowest term.",
        choices: ["19/40", "21/40", "29/40", "39/40"],
        correctAnswer: 2
    },
    {
        question: "Simplify 3(5a² + 2c) - 2a(1 - 3a) - 6c.",
        choices: ["21a² - 2a - 6c", "13a² - 2a - 12c", "13a² - 2a", "21a² - 2a"],
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