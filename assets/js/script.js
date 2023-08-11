var timerEl = document.querySelector(".timer");
var getScoresEl = document.getElementById("get-scores");
var startButton = document.querySelector(".start-button");
var startText = document.getElementById("Start-text")

function startQuiz(){
    setTimer();
    document.getElementById("Start-text").remove()
    document.querySelector(".start-button").remove()
}


startButton.addEventListener("click", startQuiz);


function setTimer() {
    var seconds = 75;
    var timerInterval = setInterval(function() {
        if (seconds > 1) {
            timerEl.textContent = "Time Remaining: " + seconds + " seconds";
            seconds--;
        } else if (seconds == 1) {
            timerEl.textContent = "Time Remaining: " + seconds + " second";
            seconds--;
        } else {
            timerEl.textContent = "Out of Time"
            clearInterval(timerInterval);
        }

    }, 1000);
}

const Questions = [{
    q: "What are stings contained within?",
    a: [{ text: "Parentheses", isCorrect: false },
    { text: "$", isCorrect: false },
    { text: "?", isCorrect: false },
    { text: "Quotation Marks", isCorrect: true }
    ]
 
},
{
    q: "When you create a function, for it to work you must _____.",
    a: [{ text: "Call it", isCorrect: true},
    { text: "label it", isCorrect: false },
    { text: "Delete it", isCorrect: false },
    { text: "Pull it", isCorrect: false }
    ]
 
},
{
    q: "Arrays contain ______.",
    a: [{ text: "Numbers", isCorrect: false },
    { text: "Letters", isCorrect: false },
    { text: "Symbols", isCorrect: false },
    { text: "All of the Above", isCorrect: true }
    ]
 
}
]

let score = 0
let thisQuestion = 0

function showQuestions () {

}