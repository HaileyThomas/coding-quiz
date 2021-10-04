// VARIABLES
var timerEl = document.getElementById('timer');
var startBtn = document.getElementById('start-button');
var mainBoxEl = document.querySelector('#container');
var timeLeft = 100;
var timeInterval;
var highScore;
var oneContainerEl;
var twoContainerEl;
var threeContainerEl;
var fourContainerEl;
var fiveContainerEl;


// FUNCTIONS
// timer function
function timer() {
    // function for interval
    timeInterval = setInterval(function () {
        timerEl.textContent = timeLeft;
        // have counter decrease
        timeLeft--;
        // end timer
        if (timeLeft < 0) {
            clearInterval(timeInterval);
            endQuiz();
        };
        // set speed
    }, 1000);
};

// question one function
function questionOne() {
    // create div for container
    oneContainerEl = document.createElement("div");
    oneContainerEl.setAttribute("id", "container-one");
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
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer two is clicked
    var oneTwoBtn = document.getElementById("oneTwo");
    oneTwoBtn.addEventListener("click", function () {
        // remove current question
        oneContainerEl.remove();
        // start next question
        questionTwo();
    });
    // when answer three is clicked
    var oneThreeBtn = document.getElementById("oneThree");
    oneThreeBtn.addEventListener("click", function () {
        answerThreeQuestionOneEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
};

// question two function
function questionTwo() {
    // create div for container
    twoContainerEl = document.createElement("div");
    twoContainerEl.setAttribute("id", "container-two");
    // create div for question
    var questionTwoEl = document.createElement("div");
    questionTwoEl.className = "question-box";
    questionTwoEl.textContent = "When you pass a function into another function it is called a ...";
    twoContainerEl.appendChild(questionTwoEl);
    //create buttons for answers
    // answer one
    var answerOneQuestionTwoEl = document.createElement("button");
    answerOneQuestionTwoEl.setAttribute("id", "twoOne");
    answerOneQuestionTwoEl.className = "answer-button";
    answerOneQuestionTwoEl.textContent = "Variable";
    twoContainerEl.appendChild(answerOneQuestionTwoEl);
    // answer two
    var answerTwoQuestionTwoEl = document.createElement("button");
    answerTwoQuestionTwoEl.setAttribute("id", "twoTwo");
    answerTwoQuestionTwoEl.className = "answer-button";
    answerTwoQuestionTwoEl.textContent = "Function Expression";
    twoContainerEl.appendChild(answerTwoQuestionTwoEl);
    // answer three (correct)
    var answerThreeQuestionTwoEl = document.createElement("button");
    answerThreeQuestionTwoEl.setAttribute("id", "twoThree");
    answerThreeQuestionTwoEl.className = "answer-button";
    answerThreeQuestionTwoEl.textContent = "Callback Function";
    twoContainerEl.appendChild(answerThreeQuestionTwoEl);
    // add all to main container
    mainBoxEl.appendChild(twoContainerEl);
    // when answer one is clicked
    var twoOneBtn = document.getElementById("twoOne");
    twoOneBtn.addEventListener("click", function () {
        answerOneQuestionTwoEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer two is clicked
    var twoTwoBtn = document.getElementById("twoTwo");
    twoTwoBtn.addEventListener("click", function () {
        answerTwoQuestionTwoEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer three is clicked
    var twoThreeBtn = document.getElementById("twoThree");
    twoThreeBtn.addEventListener("click", function () {
        twoContainerEl.remove();
        questionThree();
    });
};

// question three function
function questionThree() {
    // create div for container
    threeContainerEl = document.createElement("div");
    threeContainerEl.setAttribute("id", "container-three");
    // create div for question
    var questionThreeEl = document.createElement("div");
    questionThreeEl.className = "question-box";
    questionThreeEl.textContent = "What is a plain language description of the steps needed to create an algorithm or application?";
    threeContainerEl.appendChild(questionThreeEl);
    // answer one (correct)
    var answerOneQuestionThreeEl = document.createElement("button");
    answerOneQuestionThreeEl.setAttribute("id", "threeOne");
    answerOneQuestionThreeEl.className = "answer-button";
    answerOneQuestionThreeEl.textContent = "Pseudocode";
    threeContainerEl.appendChild(answerOneQuestionThreeEl);
    // answer two
    var answerTwoQuestionThreeEl = document.createElement("button");
    answerTwoQuestionThreeEl.setAttribute("id", "threeTwo");
    answerTwoQuestionThreeEl.className = "answer-button";
    answerTwoQuestionThreeEl.textContent = "HTML";
    threeContainerEl.appendChild(answerTwoQuestionThreeEl);
    // answer three
    var answerThreeQuestionThreeEl = document.createElement("button");
    answerThreeQuestionThreeEl.setAttribute("id", "threeThree");
    answerThreeQuestionThreeEl.className = "answer-button";
    answerThreeQuestionThreeEl.textContent = "DOM Tree";
    threeContainerEl.appendChild(answerThreeQuestionThreeEl);
    // add all to main container
    mainBoxEl.appendChild(threeContainerEl);
    // when answer one is clicked
    var threeOneBtn = document.getElementById("threeOne");
    threeOneBtn.addEventListener("click", function () {
        threeContainerEl.remove();
        questionFour();
    });
    // when answer two is clicked
    var threeTwoBtn = document.getElementById("threeTwo");
    threeTwoBtn.addEventListener("click", function () {
        answerTwoQuestionThreeEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer three is clicked
    var threeThreeBtn = document.getElementById("threeThree");
    threeThreeBtn.addEventListener("click", function () {
        answerThreeQuestionThreeEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
};

// question four function
function questionFour() {
    // create div for container
    fourContainerEl = document.createElement("div");
    fourContainerEl.setAttribute("id", "container-four");
    // create div for question
    var questionFourEl = document.createElement("div");
    questionFourEl.className = "question-box";
    questionFourEl.textContent = "What does the 'a' in rbga() stand for?";
    fourContainerEl.appendChild(questionFourEl);
    // answer one
    var answerOneQuestionFourEl = document.createElement("button");
    answerOneQuestionFourEl.setAttribute("id", "fourOne");
    answerOneQuestionFourEl.className = "answer-button";
    answerOneQuestionFourEl.textContent = "Attribute";
    fourContainerEl.appendChild(answerOneQuestionFourEl);
    // answer two
    var answerTwoQuestionFourEl = document.createElement("button");
    answerTwoQuestionFourEl.setAttribute("id", "fourTwo");
    answerTwoQuestionFourEl.className = "answer-button";
    answerTwoQuestionFourEl.textContent = "Argument";
    fourContainerEl.appendChild(answerTwoQuestionFourEl);
    // answer three (correct)
    var answerThreeQuestionFourEl = document.createElement("button");
    answerThreeQuestionFourEl.setAttribute("id", "fourThree");
    answerThreeQuestionFourEl.className = "answer-button";
    answerThreeQuestionFourEl.textContent = "Alpha";
    fourContainerEl.appendChild(answerThreeQuestionFourEl);
    // add all to main container
    mainBoxEl.appendChild(fourContainerEl);
    // when answer one is clicked
    var fourOneBtn = document.getElementById("fourOne");
    fourOneBtn.addEventListener("click", function () {
        answerOneQuestionFourEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer two is clicked
    var fourTwoBtn = document.getElementById("fourTwo");
    fourTwoBtn.addEventListener("click", function () {
        answerTwoQuestionFourEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer three is clicked
    var fourThreeBtn = document.getElementById("fourThree");
    fourThreeBtn.addEventListener("click", function () {
        fourContainerEl.remove();
        questionFive();
    });
};

// question five function
function questionFive() {
    // create div for container
    fiveContainerEl = document.createElement("div");
    fiveContainerEl.setAttribute("id", "container-five");
    // create div for question
    var questionFiveEl = document.createElement("div");
    questionFiveEl.className = "question-box";
    questionFiveEl.textContent = "What would you use to round down to the nearest whole number?";
    fiveContainerEl.appendChild(questionFiveEl);
    // answer one
    var answerOneQuestionFiveEl = document.createElement("button");
    answerOneQuestionFiveEl.setAttribute("id", "fiveOne");
    answerOneQuestionFiveEl.className = "answer-button";
    answerOneQuestionFiveEl.textContent = "math.random()";
    fiveContainerEl.appendChild(answerOneQuestionFiveEl);
    // answer two (correct)
    var answerTwoQuestionFiveEl = document.createElement("button");
    answerTwoQuestionFiveEl.setAttribute("id", "fiveTwo");
    answerTwoQuestionFiveEl.className = "answer-button";
    answerTwoQuestionFiveEl.textContent = "math.floor()";
    fiveContainerEl.appendChild(answerTwoQuestionFiveEl);
    // answer three
    var answerThreeQuestionFiveEl = document.createElement("button");
    answerThreeQuestionFiveEl.setAttribute("id", "fiveThree");
    answerThreeQuestionFiveEl.className = "answer-button";
    answerThreeQuestionFiveEl.textContent = "math.max()";
    fiveContainerEl.appendChild(answerThreeQuestionFiveEl);
    // add all to main container
    mainBoxEl.appendChild(fiveContainerEl);
    // when answer one is clicked
    var fiveOneBtn = document.getElementById("fiveOne");
    fiveOneBtn.addEventListener("click", function () {
        answerOneQuestionFiveEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
    // when answer two is clicked
    var fiveTwoBtn = document.getElementById("fiveTwo");
    fiveTwoBtn.addEventListener("click", function () {
        fiveContainerEl.remove();
        endQuiz();
    });
    // when answer three is clicked
    var fiveThreeBtn = document.getElementById("fiveThree");
    fiveThreeBtn.addEventListener("click", function () {
        answerThreeQuestionFiveEl.className = "answer-button-wrong";
        // time penalty
        timeLeft = timeLeft - 15;
    });
};

// end quiz function
function endQuiz() {
    // stop timer
    clearInterval(timeInterval);
    console.log(timeLeft);
    var highScore = timeLeft + 1;
    console.log(highScore);
    // save high score

    // create container div
    var endQuizContainerEl = document.createElement("div");
    // create div for header/question box
    var endQuizHeaderBoxEl = document.createElement("div");
    endQuizHeaderBoxEl.className = "question-box";
    // add header
    var endQuizHeaderEl = document.createElement("h3");
    endQuizHeaderEl.textContent = "Quiz Finished!";
    // add to container element
    endQuizHeaderBoxEl.appendChild(endQuizHeaderEl);
    endQuizContainerEl.appendChild(endQuizHeaderBoxEl);
    // create message box
    var endQuizMessageBoxEl = document.createElement("div");
    endQuizMessageBoxEl.className = "welcome-box";
    // show score
    var endQuizShowHighScoreEl = document.createElement("h3");
    endQuizShowHighScoreEl.textContent = "Your score is: " + highScore;
    endQuizMessageBoxEl.appendChild(endQuizShowHighScoreEl);
    // add text
    var endQuizMessageEl = document.createElement("p");
    endQuizMessageEl.textContent = "The Coding Quiz is now complete! Enter your initials below and save your high score!";
    endQuizMessageBoxEl.appendChild(endQuizMessageEl);
    endQuizContainerEl.appendChild(endQuizMessageBoxEl);
    // create form
    var endQuizFormEl = document.createElement("form");
    endQuizMessageBoxEl.appendChild(endQuizFormEl);
    // create input field
    var endQuizInputEl = document.createElement("input");
    endQuizInputEl.setAttribute("type", "text");
    endQuizInputEl.className = "input-form";
    endQuizMessageBoxEl.appendChild(endQuizInputEl);
    // create submit button
    var highScoreBtnEl = document.createElement("button");
    highScoreBtnEl.setAttribute("id", "high-score");
    highScoreBtnEl.className = "btn";
    highScoreBtnEl.textContent = "Submit Score";
    endQuizMessageBoxEl.appendChild(highScoreBtnEl);
    // add all to main container
    mainBoxEl.appendChild(endQuizContainerEl);
};

// Start Button Listener
startBtn.addEventListener("click", function () {
    // start timer
    timer();
    // name welcome box and remove
    var welcomeBox = document.getElementById("welcome");
    welcomeBox.remove();
    // start question 1
    questionOne();
});
