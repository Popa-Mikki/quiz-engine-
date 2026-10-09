var questions = [
    {
         question: "What is the maximum number of clubs a player is allowed to carry in their bag during a round?",
        choices: ["10", "12", "14", "16"],
        correctAnswer: 2
    },
    {
        question: "If a ball is accidentally moved during a search in the rough, what is the penalty?",
        choices: ["One penalty stroke", "Two penalty strokes", "Loss of hole", "No penalty"],
        correctAnswer: 3
    },
    {
        question: "How long are you allowed to search for a lost ball before it becomes officially lost?",
        choices: ["2 minutes", "3 minutes", "5 minutes", "10 minutes"],
        correctAnswer: 1
    },
    {
        question: "What should you do if your tee shot lands on the wrong putting green?",
        choices: ["Play it as it lies without penalty", "Take free relief at the nearest point of complete relief off the green", "Take a one-stroke penalty and drop off the green", "Re-tee from the teeing area"],
        correctAnswer: 1
    },
    {
        question: "In match play, what happens if you play out of turn from the teeing area?",
        choices: ["One penalty stroke", "Two penalty strokes", "Your opponent may immediately cancel your stroke and require you to play again", "Disqualification"],
        correctAnswer: 2
    },
    {
        question: "What is the height from which a ball must be dropped when taking relief?",
        choices: ["Shoulder height", "Chest height", "Knee height", "Belt height"],
        correctAnswer: 2
    },
    {
        question: "Are you allowed to touch the sand in a bunker with your club during a practice swing?",
        choices: ["Yes, anywhere in the bunker", "Yes, as long as it is away from the ball", "No, touching the sand in a bunker with a practice swing incurs a penalty", "Only if it is wet sand"],
        correctAnswer: 2
    },
    {
        question: "If your ball accidentally strikes yourself or your equipment after a shot, what is the penalty?",
        choices: ["No penalty", "One penalty stroke", "Two penalty strokes", "Loss of hole"],
        correctAnswer: 0
    },
    {
        question: "What color lines or stakes are used to mark a Yellow Penalty Area?",
        choices: ["Red", "Yellow", "White", "Blue"],
        correctAnswer: 1
    },
    {
        question: "If your ball comes to rest in a Red Penalty Area, how many total relief options do you have for a one-stroke penalty?",
        choices: ["1 option", "2 options", "3 options", "4 options"],
        correctAnswer: 2
    },
    {
        question: "What color stakes or lines define Out of Bounds?",
        choices: ["Red", "Yellow", "White", "Green"],
        correctAnswer: 2
    },
    {
        question: "If your ball lies on a paved cart path, what kind of relief are you entitled to?",
        choices: ["Free relief", "One penalty stroke relief", "Two penalty stroke relief", "No relief, you must play it as it lies"],
        correctAnswer: 0
    },
    {
        question: "What is the penalty if you play a wrong ball in stroke play?",
        choices: ["One penalty stroke", "Two penalty strokes", "Three penalty strokes", "Disqualification"],
        correctAnswer: 1
    },
    {
        question: "When taking a drop for relief, where must the dropped ball land and come to rest?",
        choices: ["In the relief area", "Anywhere within two club-lengths of the player", "Within one club-length of where it hits the ground", "On the fairway"],
        correctAnswer: 0
    },
    {
        question: "Can you remove loose impediments (such as leaves, twigs, or loose stones) in a bunker?",
        choices: ["Yes, without penalty", "No, it incurs a one-stroke penalty", "No, it incurs a two-stroke penalty", "Only if they are within one club-length of the ball"],
        correctAnswer: 0
    },
    {
        question: "What is the penalty if your ball hits an flagstick left resting in the hole after a stroke from the putting green?",
        choices: ["One penalty stroke", "Two penalty strokes", "Loss of hole", "No penalty"],
        correctAnswer: 3
    },
    {
        question: "Are you permitted to repair spike marks or shoe damage on the putting green on your line of play?",
        choices: ["Yes, without penalty", "No, you can only repair ball marks", "Yes, but only after putting", "No, doing so incurs a two-stroke penalty"],
        correctAnswer: 0
    },
    {
        question: "If a player accidentally moves their ball on the putting green while preparing to putt, what is the rule?",
        choices: ["One penalty stroke, and play as it lies", "One penalty stroke, and replace the ball", "No penalty, and replace the ball", "Two penalty strokes and play as it lies"],
        correctAnswer: 2
    },
    {
        question: "What length is used to define a 'club-length' when measuring a relief area?",
        choices: ["The longest club in your bag, except the putter", "Any club in your bag", "The club you intend to hit for your next stroke", "A standard 43-inch measuring stick"],
        correctAnswer: 0
    },
    {
        question: "If a ball breaks into pieces after being struck, what is the procedure?",
        choices: ["Play the largest piece as it lies", "Estimate where the largest piece landed and play from there", "The stroke does not count; replace with another ball and play again without penalty", "Take a one-stroke penalty and drop another ball"],
        correctAnswer: 2
    },
    {
        question: "What is the penalty if you hit a provisional ball and then find your original ball within bounds within 3 minutes?",
        choices: ["One penalty stroke", "Two penalty strokes", "You must abandon the provisional ball without penalty and play the original ball", "You must play the provisional ball"],
        correctAnswer: 2
    },
    {
        question: "Can you tap down the grass behind your ball in the rough to improve your lie before making a stroke?",
        choices: ["Yes, freely", "Yes, if using lighter pressure", "No, improving the conditions affecting the stroke results in a two-stroke penalty", "Yes, but only with your hands"],
        correctAnswer: 2
    },
    {
        question: "In stroke play, if a player signs and submits a score card with a lower score on a hole than actually taken, what is the penalty?",
        choices: ["Two penalty strokes added to that hole", "The card is automatically corrected without penalty", "Disqualification", "Re-play the round"],
        correctAnswer: 2
    },
    {
        question: "What is the penalty for declaring your ball unplayable?",
        choices: ["No penalty", "One penalty stroke", "Two penalty strokes", "Loss of hole"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a relief option for an unplayable ball in the general area?",
        choices: ["Stroke-and-distance relief", "Back-on-the-line relief", "Lateral relief within two club-lengths", "Lateral relief within three club-lengths"],
        correctAnswer: 3
    },
    {
        question: "What should you do if an embedded ball occurs in the general area (e.g., fairway or rough)?",
        choices: ["Play it as it lies", "Take free relief by dropping a ball within one club-length of the spot right behind the ball", "Take a one-stroke penalty drop", "Clean the ball and place it back in its pitch mark"],
        correctAnswer: 1
    },
    {
        question: "When playing from the teeing area, where must the ball be placed?",
        choices: ["Strictly between the two tee-markers", "Within the rectangular area two club-lengths deep behind the front edges of the tee-markers", "Anywhere on the tee box", "Directly on the line connecting the front of the tee-markers"],
        correctAnswer: 1
    },
    {
        question: "If a tee shot knocked a ball off the tee while taking a practice swing, what is the ruling?",
        choices: ["One stroke penalty, play as it lies", "One stroke penalty, re-tee", "No penalty, the ball was not in play; re-tee the ball", "Two stroke penalty"],
        correctAnswer: 2
    },
    {
        question: "What happens if a player asks their opponent or fellow competitor for advice on which club to hit?",
        choices: ["No penalty", "One penalty stroke", "Two penalty strokes (or loss of hole in match play)", "Disqualification"],
        correctAnswer: 2
    },
    {
        question: "May a player clean their ball after lifting it from the putting green?",
        choices: ["Yes", "No", "Only if it has mud on it", "Only with permission from an opponent or marker"],
        correctAnswer: 0
    },
    {
        question: "What is an movable obstruction?",
        choices: ["A tree branch attached to a tree", "An artificial object that can be moved with reasonable effort without damaging it", "A large boulder", "A bunker rake fixed permanently into the ground"],
        correctAnswer: 1
    },
    {
        question: "How do you take relief from a movable obstruction (like a rake lying near your ball)?",
        choices: ["You must drop within one club-length", "Move the obstruction; if the ball moves, replace it without penalty", "Take a one-stroke penalty and drop", "You cannot move obstructions"],
        correctAnswer: 1
    },
    {
        question: "If you lift a ball to identify it in the rough, what must you do first?",
        choices: ["Mark the spot of the ball and do not clean it more than necessary", "Clean the ball completely", "Ask permission from a referee", "Take a practice drop"],
        correctAnswer: 0
    },
    {
        question: "If your ball lies in temporary water (casual water) on the fairway, what relief are you entitled to?",
        choices: ["Free relief, dropping within one club-length of the nearest point of complete relief", "One penalty stroke drop", "Relief on the putting green only", "No relief"],
        correctAnswer: 0
    },
    {
        question: "Is sand on the fairway considered a loose impediment?",
        choices: ["Yes, anywhere on the course", "No, sand and loose soil are loose impediments ONLY on the putting green", "Yes, but only in autumn", "No, sand is never a loose impediment anywhere"],
        correctAnswer: 1
    },
    {
        question: "What is the maximum time allowed to play a stroke once it is your turn and it is safe to play (under pace of play recommendations)?",
        choices: ["20 seconds", "40 seconds", "60 seconds", "90 seconds"],
        correctAnswer: 1
    },
    {
        question: "If your ball hits a bird in flight after a stroke, what is the procedure?",
        choices: ["Re-play the stroke without penalty", "Play the ball as it lies without penalty", "Take a one-stroke penalty drop", "Take a two-stroke penalty drop"],
        correctAnswer: 1
    },
    {
        question: "When taking back-on-the-line relief, where do you drop the ball?",
        choices: ["Directly on the line extending straight back from the hole through the reference spot", "Anywhere to the left of the line", "Within two club-lengths of the hole", "Anywhere in front of the reference spot"],
        correctAnswer: 0
    },
    {
        question: "If you hit a ball out of bounds, what is your only relief option?",
        choices: ["Drop within two club-lengths of where it crossed the boundary with a one-stroke penalty", "Play another ball from where the previous stroke was made under stroke and distance (one-stroke penalty)", "Drop on the nearest fairway edge with a one-stroke penalty", "Play another ball with a two-stroke penalty"],
        correctAnswer: 1
    },
    {
        question: "Are you allowed to stand straddling your line of putt when making a stroke on the putting green?",
        choices: ["Yes, always", "No, a player must not make a stroke with their feet straddling the line of putt", "Yes, provided you do not touch the line with your shoes", "Only if playing in match play"],
        correctAnswer: 1
    },
    {
        question: "What should a player do if their ball comes to rest against a flagstick in the hole, but is not completely below the surface of the green?",
        choices: ["If any part of the ball is below the surface of the green inside the hole, the ball is holed", "The ball must be replaced on the lip of the hole", "It counts as a one-stroke penalty", "The player must hit the flagstick away"],
        correctAnswer: 0
    },
    {
        question: "Can a player use distance-measuring devices (DMDs) like laser rangefinders during a round?",
        choices: ["No, never allowed", "Yes, provided the device measures distance only and not slope/elevation (unless a Local Rule forbids all DMDs)", "Yes, including slope readings", "Only during practice rounds"],
        correctAnswer: 1
    },
    {
        question: "If a player accidentally plays two strokes with a cracked ball before noticing it, what happens?",
        choices: ["The player gets a two-stroke penalty", "The player is disqualified", "No penalty; the player may substitute a new ball to finish the hole", "The hole must be restarted"],
        correctAnswer: 2
    },
    {
        question: "In match play, what is the concession rule regarding putts or holes?",
        choices: ["A player may concede a stroke, hole, or match at any time before completion", "Concessions are not allowed", "Concessions can only be made on the 18th hole", "Concessions require approval from a referee"],
        correctAnswer: 0
    },
    {
        question: "If dew, frost, or water is on your line of play on the green, are you allowed to wipe it away?",
        choices: ["Yes, with a towel", "Yes, with your hand", "No, removing dew or frost from the line of play is not allowed", "Yes, but only in winter"],
        correctAnswer: 2
    },
    {
        question: "What is the penalty if a player touches the green to indicate a line for putting?",
        choices: ["No penalty, as long as they do not press down or improve the line", "One stroke penalty", "Two stroke penalty", "Loss of hole"],
        correctAnswer: 0
    },
    {
        question: "What is the ruling if your ball comes to rest in a animal hole (abnormal course condition)?",
        choices: ["Free relief", "One penalty stroke drop", "Two penalty stroke drop", "Must be played as it lies"],
        correctAnswer: 0
    },
    {
        question: "If a stray dog picks up your golf ball on the fairway and runs off with it, what should you do?",
        choices: ["Take a lost ball penalty", "Estimate the spot where the ball was taken and place a ball on that spot without penalty", "Re-tee from the teeing area", "Drop a ball at the spot where the dog dropped it"],
        correctAnswer: 1
    },
    {
        question: "Are alignment rods allowed to be laid on the ground during a stroke to help aim?",
        choices: ["Yes, if removed before hitting", "No, laying down an object to assist in alignment before/during a stroke incurs a two-stroke penalty", "Yes, freely allowed", "Only on the teeing area"],
        correctAnswer: 1
    },
    {
        question: "What is the fundamental philosophy of the Rules of Golf?",
        choices: ["Play the course as you find it and play the ball as it lies", "Always hit as far as possible", "Higher scores always override rules errors", "Stay focussed while on the greens"],
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