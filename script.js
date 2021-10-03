// VARIABLES
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');
var mainBoxEl = document.querySelector('#container');


// FUNCTIONS
// timer function
function timer() {
    // total time
    var timeLeft = 100;
    // function for interval
    var timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        // have counter decrease
        timeLeft--;

        // if (timeLeft < 15) {
        // timerEl.style.color = "orange"; }
        // end timer
        if (timeLeft < 0) {
            clearInterval(timeInterval);
        };
        // set speed
    }, 1000);
};

// question one function
function questionOne() {
    // create div for container
    var oneContainerEl = document.createElement("div");
    // create div for question
    var questionOneEl = document.createElement("div");
    questionOneEl.className = "question-box";
    questionOneEl.textContent = "What is DOM an acronym for?";
    oneContainerEl.appendChild(questionOneEl);
    // create buttons for answers
    // answer one
    var answerOneQuestionOneEl = document.createElement("button");
    answerOneQuestionOneEl.setAttribute("id", "oneOne");
    answerOneQuestionOneEl.className = "answer-button";
    answerOneQuestionOneEl.textContent = "Dynamic Optimization Method";
    oneContainerEl.appendChild(answerOneQuestionOneEl);
    // answer two (correct)
    var answerTwoQuestionOneEl = document.createElement("button");
    answerTwoQuestionOneEl.setAttribute("id", "oneTwo");
    answerTwoQuestionOneEl.className = "answer-button";
    answerTwoQuestionOneEl.textContent = "Document Object Model";
    oneContainerEl.appendChild(answerTwoQuestionOneEl);
    // answer three
    var answerThreeQuestionOneEl = document.createElement("button");
    answerThreeQuestionOneEl.setAttribute("id", "oneThree");
    answerThreeQuestionOneEl.className = "answer-button";
    answerThreeQuestionOneEl.textContent = "Data Operation Math";
    oneContainerEl.appendChild(answerThreeQuestionOneEl);
    // console log container
    console.log(oneContainerEl);
    // add all to main container
    mainBoxEl.appendChild(oneContainerEl);
    // when answer one is clicked
    var oneOneBtn = document.getElementById("oneOne");
    oneOneBtn.addEventListener("click", function () {
        answerOneQuestionOneEl.className = "answer-button-wrong";
    });
    // when answer two is clicked
    var oneTwoBtn = document.getElementById("oneTwo");
    oneTwoBtn.addEventListener("click", function () {
        oneContainerEl.remove();
        questionTwo();
    });
    // when answer three is clicked
    var oneThreeBtn = document.getElementById("oneThree");
    oneThreeBtn.addEventListener("click", function () {
        answerThreeQuestionOneEl.className = "answer-button-wrong";
    });
};

// question two function
function questionTwo() {

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
