const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qstnContainer = document.getElementById("quizbox");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");
const description = document.getElementById("description");
const timer = document.getElementById("timer");
const timeLeft = document.getElementById("timeLeft");
const timesUp = document.getElementById("timesup");
const initialInput = document.getElementById("initialInput");

var correctAns = 0;
var scoreResult;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startTest)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})
var totalTime = 61;
function startTest() {
startButton.classList.add("hide");
totalTime = 60;
timeLeft.textContent = totalTime;

shuffledQuestions = testQuestions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
qstnContainer.classList.remove("hide");
var startTimer = setInterval(function (){
    totalTime--;
    timeLeft.textContent = totalTime;
    if(currentQuestionIndex < testQuestions.length - 1) {
        gameOver();
    }
},1000);
nextQuestion();
}

function nextQuestion() {
    resetForm()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}



function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    })
}

function resetForm() {
    nextButton.classList.add("hide")
    while(answerButtons.firstChild) {
        answerButtons.removeChild
        (answerButtons.firstChild)
    }
}

function selectAnswer(event) {
    const selectedButton = event.target;
    const correct = selectedButton.dataset.correct;
    setStatus(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button, button.dataset.correct);
        if (selectedButton.dataset == true) {
            correctAns++;
        } else {
            totalTime -= 5;
            timeLeft.textContent = totalTime;

        }
    })
    nextButton.classList.remove("hide");
} 


function setStatus(element, correct) {
    
    if (correct) {
        element.classList.add("correct");
   } else {
        element.classList.add("wrong");
   }
}



const testQuestions = [
{
    question: "What is JavaScript?",
    answers: [
        {text: "HTML", correct: false},
        {text: "JS", correct: true}
    ]
  },
  {
    question: "Who is JavaScript?",
    answers: [
        {text: "HTML", correct: false},
        {text: "JS", correct: true}
    ]
  },
  {
    question: "Why is JavaScript?",
    answers: [
        {text: "HTML", correct: false},
        {text: "JS", correct: true}
    ]
  },
  {
    question: "When is JavaScript?",
    answers: [
        {text: "HTML", correct: false},
        {text: "JS", correct: true}
    ]
  }

]