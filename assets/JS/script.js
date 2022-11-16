const testQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
        answer: "d. <script>"
        
      },
      {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parenthesis"],
        answer: "c. quotes"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
        answer: "b. other arrays"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
        answer: "c. alerts"
    },
    {
        question: "How do you create a function in JavaScript",
        choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
        answer: "b. function myFunction()"
    },
    {
        question: "How do you call a function named myFunction?",
        choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
        answer: "c. myFunctions()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
        answer: "b. =="
    },
    {
        question: "The first index of an array is ____.",
        choices: ["a. 0", "b. 1", "c. 8", "d. any"],
        answer: "a. 0"
    },
    {
        question: "Who invented JavaScript?",
        choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
        answer: "c. Brendan Eich"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
        answer: "c. if(i == 5)"
    },
    {
        question: "How do you add a comment in a JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
        answer: "a. onclick"
    }
    ];



const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qstnContainer = document.getElementById("quizbox");
const questionElement = document.getElementById("question");
const description = document.getElementById("description");
const timer = document.getElementById("timer");
const timeLeft = document.getElementById("timeLeft");
const timesUp = document.getElementById("timesup");
const initialInput = document.getElementById("initialInput");
const finalScore = document.getElementById("finalscore")
const submitInitialBtn = document.getElementById("submitInitialBtn")
const viewHighScore = document.getElementById("viewhighscore")
const listOfHighScores = document.getElementById("listofhighscores")

var correctAns = 0;
var scoreResult;
var currentQuestionIndex = 0;


startButton.addEventListener("click", startTest)


var totalTime = 61;
function startTest() {
startButton.classList.add("hide");
totalTime = 60;
timeLeft.textContent = totalTime;
initialInput.textContent = '';
currentQuestionIndex = 0;
qstnContainer.classList.remove("hide");
var startTimer = setInterval(function (){
    totalTime--;
    timeLeft.textContent = totalTime;
    if(totalTime <= 0){
        clearInterval(startTimer);
        if(totalTime === 0){
            gameOver();
        }
        if(currentQuestionIndex < testQuestions.length - 1) {
        gameOver();}
    }
},1000);
showQuestions();
}

function showQuestions() {
    nextQuestion();
}

var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");


function nextQuestion() {
    questionElement.textContent = testQuestions[currentQuestionIndex].question;
    choiceA.textContent = testQuestions[currentQuestionIndex].choices[0];
    choiceB.textContent = testQuestions[currentQuestionIndex].choices[1];
    choiceC.textContent = testQuestions[currentQuestionIndex].choices[2];
    choiceD.textContent = testQuestions[currentQuestionIndex].choices[3];
}

var answerCheck = document.getElementById("answerCheck")


function checkAnswer(answer) {
    answerCheck.style.display = "block";

    if(testQuestions[currentQuestionIndex].answer === testQuestions[currentQuestionIndex].choices[answer]) {
        correctAns++;
      
        answerCheck.textContent = "Correct!";
        answerCheck.style.color = "green";
    } else {
        totalTime -= 5;
        answerCheck.textContent = "Wrong!";
        answerCheck.style.color = "red";
    }

currentQuestionIndex++;
if (currentQuestionIndex < testQuestions.length) {
    nextQuestion();
} else {
    gameOver();
}}



function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }



choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);



function gameOver() {
    summary.style.display = "block";
    qstnContainer.classList.add("hide");
    answerCheck.style.display = "none";
    finalScore.textContent = correctAns;
}



function storeHighScores(event) {
    event.preventDefault();
    


}

