const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const qstnContainer = document.getElementById("quizbox");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-btns");

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startTest)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    nextQuestion();
})

function startTest() {
startButton.classList.add("hide");
shuffledQuestions = testQuestions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
qstnContainer.classList.remove("hide");
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

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatus(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatus(button, button.dataset.correct);
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

function clearSatus(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
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