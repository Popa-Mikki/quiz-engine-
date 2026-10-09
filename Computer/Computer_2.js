var questions = [
    {
        question: "Kwame needs to print out his assignment to submit to his teacher. Which device should he use?",
        choices: ["Monitor", "Projector", "Scanner", "Printer"],
        correctAnswer: 3
    },
    {
        question: "While working on a document, Abena realizes she can see the text on her computer screen but hasn't printed it yet. What kind of document is this?",
        choices: ["Audio", "Softcopy", "Hardcopy", "Scanned document"],
        correctAnswer: 1
    },
    {
        question: "A business owner prints invoices for customers on paper for record-keeping. This printed document is referred to as:",
        choices: ["Hardcopy", "Scanned document", "Softcopy", "Audio"],
        correctAnswer: 0
    },
    {
        question: "Selorm is reading an online book on his tablet. Which of the following is NOT a feature of this softcopy document?",
        choices: ["Output can be enlarged", "Output is fixed in size", "You can search for a word in the document", "It cannot be printed later"],
        correctAnswer: 1
    },
    {
        question: "Adjoa is comparing printed (hardcopy) documents and digital (softcopy) documents. Which of the following is NOT an advantage of a hardcopy document?",
        choices: ["They are free from viruses", "It can be used without computer skills", "It can be enlarged", "It can be used in the absence of electricity"],
        correctAnswer: 2
    },
    {
        question: "A school for the visually impaired uses a special printer that produces raised dots on paper to help blind students read. What kind of printer is this?",
        choices: ["Braille Printer", "Matrix printer", "Inkjet Printer", "Daisy wheel"],
        correctAnswer: 0
    },
    {
        question: "A newspaper company uses a printer that works by striking a ribbon against the paper to form characters. Which type of printer are they using?",
        choices: ["Braille Printer", "Matrix printer", "Daisy wheel", "Inkjet Printer"],
        correctAnswer: 1
    },
    {
        question: "Kofi wants to buy a printer for his graphic design work. He needs a printer that sprays tiny drops of ink onto paper to create high-quality images. Which printer should he choose?",
        choices: ["Inkjet printer", "Braille Printer", "Matrix printer", "Daisy wheel"],
        correctAnswer: 0
    },
    {
        question: "A supermarket uses a special printer to print receipts instantly. This printer does not use ink but instead heats special thermal paper to create the text. What kind of printer is this?",
        choices: ["Thermal Printer", "Matrix Printer", "Inkjet printer", "Braille Printer"],
        correctAnswer: 0
    },
    {
        question: "A computer technician explains that there is a device inside a computer that allows users to save and retrieve information. What is this device called?",
        choices: ["Storage media", "Storage device", "Primary storage", "Secondary storage"],
        correctAnswer: 1
    },
    {
        question: "A photographer saves his pictures on a USB flash drive. The USB flash drive is an example of what?",
        choices: ["Primary storage", "Secondary storage", "Storage media", "Storage device"],
        correctAnswer: 3
    },
    {
        question: "A student is learning about different types of storage technologies. Which of the following is NOT a major type of storage device?",
        choices: ["Magnetic storage devices", "Optical storage devices", "Solid-state storage devices", "Hard disk drive storage devices"],
        correctAnswer: 3
    },
    {
        question: "A bank stores customer transaction data on a storage media that uses magnetic fields to save information. What type of storage is this?",
        choices: ["Optical Storage media", "Magnetic storage media", "Solid-state storage media", "Plug and play media"],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT an example of a magnetic storage device?",
        choices: ["Hard Disk Drive", "Flash Drive", "Floppy Disk Drive", "Zip Disk Drive"],
        correctAnswer: 1
    },
    {
        question: "Ama wants to save her project on a disc that uses a laser beam to read and write data. Which type of storage device should she use?",
        choices: ["Optical Storage devices", "Magnetic storage devices", "Solid state storage devices", "Magnetic storage media"],
        correctAnswer: 0
    },
    {
        question: "Kwame needs to copy and carry some files to his friend's house. Which device would make it easy to transport the files?",
        choices: ["Flash drive", "Blu-ray disc", "Floppy disk", "Hard disk"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT an advantage of using a flash drive?",
        choices: ["It is very durable since flash drives lack moving parts unlike traditional hard-disk drives.", "They are portable and can be carried anywhere.", "They have a larger storage capacity than a floppy disk.", "It has a lot of moving parts"],
        correctAnswer: 3
    },
    {
        question: "Which of the following is NOT an example of an embedded flash memory card?",
        choices: ["Secure Digital High Capacity card", "Compact Flash card", "Blu-ray disk card", "Smart Media card"],
        correctAnswer: 2
    },
    {
        question: "A photographer wants to transfer pictures from his camera's memory card to a computer. Which device should he use?",
        choices: ["Card reader / adapter", "Registers adapter", "Memory card", "Control unit card / adapter"],
        correctAnswer: 0
    },
    {
        question: "A gamer wants a storage device that offers both fast speed and large capacity. Which type of storage device should he choose?",
        choices: ["Hybrid hard drives", "Multi hard drive", "Integrated hard drive", "Multi-purpose hard drive"],
        correctAnswer: 0
    },
    {
        question: "In Windows 8, there's a toolbar that provides quick access to settings, search, and sharing options. What is this toolbar called?",
        choices: ["Start menu", "Charms bar", "Cortana", "Status bar"],
        correctAnswer: 1
    },
    {
        question: "By default, where can you find the Charms bar on the Windows 8 screen?",
        choices: ["Right-hand side of the screen", "Left-hand side of the screen", "Center of the screen", "Top corner of the screen"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is NOT a tool available in the Charms bar?",
        choices: ["Search", "Share", "Devices", "Start menu"],
        correctAnswer: 3
    },
    {
        question: "John wants to find a specific document on his computer. Which tool in the Charms bar should he use?",
        choices: ["Devices", "Start menu", "Setting", "Search"],
        correctAnswer: 3
    },
    {
        question: "Which feature in the Charms bar lets users share content with other apps or people?",
        choices: ["Setting", "Share", "Devices", "Start menu"],
        correctAnswer: 1
    },
    {
        question: "When connecting a printer or another external device, which section of the Charms bar shows connected hardware components?",
        choices: ["Devices", "Start menu", "Setting", "Share"],
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