var timerEl = document.querySelector(".timer");
var getScoresEl = document.getElementById("get-scores");
var startButton = document.querySelector(".start-button");
var startText = document.getElementById("Start-text");
var submitButton = document.getElementById("submit-button");
var cOrW = document.querySelector(".c-or-w");
var nextButton = document.getElementById("next-button");
const question = document.querySelector(".question");
const options = document.querySelector(".options");

var subBtn = document.createElement("button");
subBtn.textContent = "Submit";

var nxtBtn = document.createElement("button");
nxtBtn.textContent = "Next";

function startQuiz(){
    setTimer();
    document.getElementById("Start-text").remove()
    document.querySelector(".start-button").remove()
    showQuestions();
    document.getElementById("submit-button").appendChild(subBtn);
}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click", checkAnswer);

nextButton.addEventListener("click", nextQ);

var seconds = 30;

var timerInterval;

function setTimer() {
    timerInterval = setInterval(function() {
        if (seconds > 1) {
            timerEl.textContent = "Time Remaining: " + seconds + " seconds";
            seconds--;
        } else if (seconds == 1) {
            timerEl.textContent = "Time Remaining: " + seconds + " second";
            seconds--;
        } else {
            timerEl.textContent = "Time Remaining: 0 seconds";
            clearInterval(timerInterval);
            question.textContent = "Out of Time";
            options.textContent = "";
            submitButton.remove();
            nextButton.remove();
            showScore();
        }

        if (thisQuestion < Questions.length) {
        } else {
            timerEl.textContent = "All questions answered"
            clearInterval(timerInterval);
        }

    }, 1000);
}

const Questions = [{
    q: "What are stings contained within?",
    answers: [{ text: "Parentheses", isCorrect: false },
    { text: "$", isCorrect: false },
    { text: "?", isCorrect: false },
    { text: "Quotation Marks", isCorrect: true }
    ]
 
},
{
    q: "When you create a function, for it to work you must _____.",
    answers: [{ text: "Call it", isCorrect: true},
    { text: "label it", isCorrect: false },
    { text: "Delete it", isCorrect: false },
    { text: "Pull it", isCorrect: false }
    ]
 
},
{
    q: "Arrays contain ______.",
    answers: [{ text: "Numbers", isCorrect: false },
    { text: "Letters", isCorrect: false },
    { text: "Symbols", isCorrect: false },
    { text: "All of the Above", isCorrect: true }
    ]
 
}
]

let score = 0
let thisQuestion = 0

function showQuestions () {
    question.textContent = Questions[thisQuestion].q;
    options.innerHTML = ""

    for (let i = 0; i < Questions[thisQuestion].answers.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type="radio";
        choice.name="answer";
        choice.value=i;

        choiceLabel.textContent = Questions[thisQuestion].answers[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        options.appendChild(choicesdiv);
    }
}

function checkAnswer () {
    const pickedOption = parseInt(document.querySelector('input[name="answer"]:checked').value);
    if (Questions[thisQuestion].answers[pickedOption].isCorrect) {
        score++;
        cOrW.textContent = "Correct!"
        document.getElementById("next-button").appendChild(nxtBtn);
        nxtBtn.disabled = false;
        subBtn.disabled = true;
    } else {
        cOrW.textContent = "Wrong"
        document.getElementById("next-button").appendChild(nxtBtn);
        nxtBtn.disabled = false;
        subBtn.disabled = true;
        seconds = seconds - 10;
    }
}

function nextQ () {
    if (thisQuestion < Questions.length - 1) {
        thisQuestion++;
        cOrW.textContent = ""
        showQuestions();
        nxtBtn.disabled = true;
        subBtn.disabled = false;
    } else {
        clearInterval(timerInterval);
        document.querySelector(".question").remove()
        document.querySelector(".options").remove()
        document.getElementById("submit-button").remove()
        document.getElementById("next-button").remove()
        cOrW.textContent = ""
        showPrompt();
    }
}

function criteriaPrompt(criteria) {
    return prompt (criteria);
}

const firstPrompt = "First Name: ";
const secondPrompt = "Last Name: ";

function fNameP () {
    let firstN = criteriaPrompt (firstPrompt);
    if (firstN === "") {
        fNameP ();
    } else {
        return firstN;
    }
}

function lNameP () {
    let lastN = criteriaPrompt (secondPrompt);
    if (lastN === "") {
        lNameP ();
    } else {
        return lastN;
    }
}

var savBtn = document.createElement("button");
savBtn.textContent = "Save Score";

var saveButton = document.getElementById("save-button");

function showPrompt () {
    var total = document.querySelector(".score");
    percent = score / Questions.length * 100;
    let firstN = fNameP ();
    let lastN = lNameP ();
    total.textContent = `${firstN} ${lastN} - ${percent}%`;
    strText = `${firstN} ${lastN} - ${percent}%`
    document.getElementById("save-button").appendChild(savBtn);
    saveButton.addEventListener("click", pushToArr ());
}

var strText = "";
var firstN = document.getElementById("fname");
var lastN = document.getElementById("lname");
var percent;

function pushToArr () {
    let saveScores = localStorage.getItem("HS");
    let highScores = (`${saveScores}` + `, ${strText}`);
    localStorage.setItem("HS", (highScores));
}