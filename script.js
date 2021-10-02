// VARIABLES
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');

// FUNCTIONS
function timer() {
    // total time
    var timeLeft = 100;
    // function for interval
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        // have counter decrease
        timeLeft--;
        // add if statement to end game here
        // if (timeLeft < 0) {}

    }, 1000);
}

// EVENT LISTENERS
startBtn.addEventListener("click", function () {
    // start timer
    timer();
    // name welcome box and remove
    var welcomeBox = document.getElementById("welcome");
    welcomeBox.remove();
    // start question 1
    questionOne();
});
