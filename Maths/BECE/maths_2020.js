var questions = [
    {
        question: "Simplify: 3/4 - 1/3 + 1/12.",
        choices: ["1/3", "1/2", "1/6", "2/3"],
        correctAnswer: 1
    },
    {
        question: "Given that N = {x: x is a factor of 18} and M = {x: x is a multiple of 12}, find N ∩ M.",
        choices: ["{1, 2, 3, 6}", "{1, 2, 3, 6, 12}", "{2, 3, 6, 12, 18}", "{}"],
        correctAnswer: 3
    },
    {
        question: "Express 4382.93 in standard form.",
        choices: ["438293 × 10⁴", "43.8293 × 10²", "4.38293 × 10⁴", "4.38293 × 10³"],
        correctAnswer: 3
    },
    {
        question: "Which property of arithmetic is used in a(x + y) = ax + ay?",
        choices: ["Associative", "Commutative", "Distributive", "Initiative"],
        correctAnswer: 2
    },
    {
        question: "Subtract (7x - 3) from (5 - 3x).",
        choices: ["10x - 8", "4x - 8", "8 - 10x", "2 - 10x"],
        correctAnswer: 2
    },
    {
        question: "The cost of 12 note books is GHc 54.84. Find the cost of one note book.",
        choices: ["GHc 5.57", "GHc 4.67", "GHc 4.57", "GHc 3.57"],
        correctAnswer: 2
    },
    {
        question: "Which of the following inequalities is represented on the number line with an open circle at -2 and a closed circle at 2?",
        choices: ["-2 > y > 2", "-2 ≤ y < 2", "-2 ≥ y > 2", "-2 < y ≤ 2"],
        correctAnswer: 3
    },
    {
        question: "Simplify: (2ab²)² × 3a³b.",
        choices: ["6a⁴b⁵", "12a³b⁴", "12a⁶b⁴", "12a⁵b⁵"],
        correctAnswer: 3
    },
    {
        question: "Which of the following polygons does not have a line of symmetry?",
        choices: ["Kite", "Isosceles triangle", "Trapezium", "Rhombus"],
        correctAnswer: 2
    },
    {
        question: "A trader sold a radio set for GHc 72.00 making a profit of 8%. Find, correct to the nearest Ghana cedi, the cost price of the radio set.",
        choices: ["GHc 66.00", "GHc 67.00", "GHc 77.00", "GHc 78.00"],
        correctAnswer: 1
    },
    {
        question: "Vera is 11 years old and her brother is 9 years old. They shared 60 oranges in the ratio of their ages. How many more oranges does Vera get?",
        choices: ["6", "27", "34", "39"],
        correctAnswer: 0
    },
    {
        question: "If (x - 3)² = 16, find the positive value of x.",
        choices: ["1", "3", "4", "7"],
        correctAnswer: 3
    },
    {
        question: "Find the image of the point (-2, 3) under a reflection in the y-axis.",
        choices: ["(2, -3)", "(-3, 2)", "(2, 3)", "(3, 2)"],
        correctAnswer: 2
    },
    {
        question: "What fraction of 3 weeks is 18 days?",
        choices: ["1/6", "6/7", "1/7", "9/11"],
        correctAnswer: 1
    },
    {
        question: "What is the median of the following numbers: 4, 16, 13, 18, 3, 20, 6, 7, 15, 2, 10, 12?",
        choices: ["7", "10", "11", "12"],
        correctAnswer: 2
    },
    {
        question: "If w/3 = 3(w - 1) - 1, find the value of w.",
        choices: ["3/2", "5/4", "3/5", "1/2"],
        correctAnswer: 0
    },
    {
        question: "In an isosceles triangle with base angles and an exterior angle of 56°, find the value of the exterior angle x.",
        choices: ["68°", "75°", "112°", "124°"],
        correctAnswer: 3
    },
    {
        question: "Using the same isosceles triangle diagram, find the value of y.",
        choices: ["68°", "75°", "112°", "124°"],
        correctAnswer: 0
    },
    {
        question: "A car used 8 hours to travel from town A to town B at a speed of 18 km/h. Find the distance travelled.",
        choices: ["22.5 km", "135 km", "140 km", "144 km"],
        correctAnswer: 3
    },
    {
        question: "From the budget pie chart (Food: 22%, Rent: 28%, Others: 16%, Entertainment: 5%, Savings: 3%, Clothing: 11%), find the angle for INSURANCE AND TAXES.",
        choices: ["45°", "54°", "60°", "72°"],
        correctAnswer: 1
    },
    {
        question: "If the family's income was GHc 40,000.00, how much was spent on clothing (11%)?",
        choices: ["GHc 1,600.00", "GHc 2,000.00", "GHc 3,200.00", "GHc 4,400.00"],
        correctAnswer: 3
    },
    {
        question: "Two sides of a parallelogram are 5.8 m and 8.2 m long. Find its perimeter.",
        choices: ["11.0 m", "36.6 m", "28.0 m", "47.6 m"],
        correctAnswer: 2
    },
    {
        question: "A man earned an interest of GHc 240.00 in 4 years at 20% per annum simple interest. Calculate the principal.",
        choices: ["GHc 300.00", "GHc 450.00", "GHc 480.00", "GHc 1,200.00"],
        correctAnswer: 0
    },
    {
        question: "A labourer worked for 20½ hours. If he was paid GHc 2.50 per hour, what was his total wage?",
        choices: ["GHc 51.00", "GHc 51.25", "GHc 512.00", "GHc 512.25"],
        correctAnswer: 1
    },
    {
        question: "If 480 pupils in a school are boys representing 80% of the school's enrolment, find the total number of pupils in the school.",
        choices: ["384", "540", "600", "864"],
        correctAnswer: 2
    },
    {
        question: "Using the mapping (1→2, 2→5, 3→10, 4→17), what is the rule for the mapping?",
        choices: ["x → 3x² - 1", "x → 5x - 3", "x → x² + 1", "x → 4x - 2"],
        correctAnswer: 2
    },
    {
        question: "In a right-angled triangle with hypotenuse 13 cm and height 5 cm, find the base value t.",
        choices: ["12", "8", "4", "3"],
        correctAnswer: 0
    },
    {
        question: "Add the following numbers: 2.4, 0.042, 1.12 and 0.342.",
        choices: ["2.184", "3.904", "4.282", "6.200"],
        correctAnswer: 1
    },
    {
        question: "Solve 4ˣ = 32.",
        choices: ["2½", "3½", "5", "7"],
        correctAnswer: 0
    },
    {
        question: "Find the equation of the straight line passing through the points (-3, 5) and (6, 8).",
        choices: ["y = (1/3)x", "y = (1/3)x + 6", "y = 3x - 10", "y = 3x - 14"],
        correctAnswer: 1
    },
    {
        question: "There are 15 females in a debating club. If the ratio of females to males is 3 : 2, how many members are in the club?",
        choices: ["6", "10", "22", "25"],
        correctAnswer: 3
    },
    {
        question: "If P'(4, -5) is the image of P(x, y) translated by r = (-2, 3), find the values of x and y.",
        choices: ["(-6, 8)", "(-6, -8)", "(6, -8)", "(6, 8)"],
        correctAnswer: 2
    },
    {
        question: "If 2y = 1 - 3x² + 4x, find y when x = -1.",
        choices: ["-3", "-1/2", "1/2", "3"],
        correctAnswer: 0
    },
    {
        question: "Given that P = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}, what is the probability of selecting a prime number from the set?",
        choices: ["2/3", "7/12", "1/2", "5/12"],
        correctAnswer: 3
    },
    {
        question: "Solve: 3 - (3x + 4) ≤ -4.",
        choices: ["x ≤ 1", "x ≥ 1", "x ≥ 1⅔", "x < 1½"],
        correctAnswer: 1
    },
    {
        question: "Two sides of a rectangle are 10 cm and 6 cm. Calculate the area of a square with the same perimeter as that of the rectangle.",
        choices: ["16 cm²", "30 cm²", "60 cm²", "64 cm²"],
        correctAnswer: 3
    },
    {
        question: "Make n the subject of the relation y = (n - x) / x.",
        choices: ["n = x(y + 1)", "n = y(x + 1)", "n = x / (y - 1)", "n = x / (y + 1)"],
        correctAnswer: 0
    },
    {
        question: "Expand and simplify: (a - 2)(2a + 3).",
        choices: ["a² - a + 6", "2a² + 7a - 6", "2a² - a - 6", "2a² - 12a + 6"],
        correctAnswer: 2
    },
    {
        question: "Simplify: 2² × 2⁷ ÷ 2⁴.",
        choices: ["2⁻¹", "2⁵", "2¹¹", "2¹⁵"],
        correctAnswer: 1
    },
    {
        question: "If P = {7, 11, 13} and Q = {9, 11, 13}, find P ∪ Q.",
        choices: ["{7, 9, 11, 13}", "{7, 9}", "{11, 13}", "{9, 13}"],
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