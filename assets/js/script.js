var timerEl = document.querySelector(".timer");
var getScoresEl = document.getElementById("get-scores");



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




setTimer();