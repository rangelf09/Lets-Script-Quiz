
var questions = document.getElementById("question");
var buttons = Array.from(document.getElementsByClassName("btn"))
var start = document.getElementById("start-control");
var answerIs = document.getElementById("answer-is");
var questionGroup = document.getElementById("question-group");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-quiz");
var endQuiz = document.getElementById("end-quiz");

var timeLeft = 0;

// this is where the current question will be and retrieved 
var currentQuestion = {};

// score will inccrease everytime a question is answered correctly
var score = 0;

var correctQuestion = 10;

// question counter will increase everytime a new question is generated
var questionCounter = 0;

// This is where the array of questin will be logged in 
var availableQuestion = []

// This is the array of questions for be added 
var arrayOfQuestion = [
    {
        question: "Question  here",
        buttonA: "A. Answer choice goes here", 
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer  goes here",
        buttonD: "D. Answer choice goes here",
        answer: "B"
    },
    {
        question: "Question one will go",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "B"
    },
    {
        question: " one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "D"
    },
    {
        question: "Question one  go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "B"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "A"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "D"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "D"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "A"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "A"
    },
    {
        question: "Question one will go here",
        buttonA: "A. Answer choice goes here",
        buttonB: "B. Answer Choice goes here",
        buttonC: "C. Answer choice goes here",
        buttonD: "D. Answer choice goes here",
        answer: "D"
    },
   
];
start.addEventListener("click", function(event) {
    timeLeft = 123;
    startPage.setAttribute("style", "display: none");
    questionGroup.setAttribute("style", "display: block");
    startGame();
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timer` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timer` to an empty string
        timer.textContent = "Time's up"
        questionGroup.setAttribute("style", "display: none");
        endQuiz.setAttribute("style", "display: block");
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
});

function startGame(){
    questionCounter ++;
    score = 0;
    availableQuestion = [...arrayOfQuestion];
    newQuestion();
}

function newQuestion(){
    questionCounter = 0;
    var indexQuestion = Math.floor(Math.random()* availableQuestion.length);
    currentQuestion = availableQuestion[indexQuestion];
    questions.textContent = currentQuestion.question;

    buttons.forEach(function(button){
     var letter = button.dataset["letter"];
     button.textContent = currentQuestion["button" + letter];
    });

    availableQuestion.splice(indexQuestion, 1);
    console.log(availableQuestion);
};

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        event.preventDefault();
        var choice = event.target;
        var answerPick = choice.dataset["letter"];

        var incorrect = 'incorrect';
        if( answerPick !== currentQuestion.answer){
          incorrect = timeLeft -= 5
        } else {
            incorrect = score += correctQuestion;
        };

        console.log(answerPick === currentQuestion.answer);
        newQuestion();
    });

});
console.log(score);
startGame();