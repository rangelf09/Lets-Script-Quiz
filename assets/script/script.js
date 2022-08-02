
var questions = document.getElementById("question");
var buttons = Array.from(document.getElementsByClassName("btn"))
var start = document.getElementById("start-control");
var answerIs = document.getElementById("answer-is");
var questionGroup = document.getElementById("question-group");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-quiz");
var endQuiz = document.getElementById("end-quiz");
var yourScore = document.getElementById("your-score");
var highScore = document.getElementById("score-items");
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
        question: "Inside which HTML element do we put the JavaScript?",
        buttonA: "A. <javascript>", 
        buttonB: "B. <script>",
        buttonC: "C. <scripting>",
        buttonD: "D. <js",
        answer: "B"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        buttonA: "A. The <body> section",
        buttonB: "B. Both the <head> section and the <body> section are correct",
        buttonC: "C. The <head> section",
        buttonD: "D. Niether",
        answer: "A"
    },
    {
        question: "How do you create a function in JavaScript?",
        buttonA: "A. function:myFunction()",
        buttonB: "B. function = myFunction()",
        buttonC: "C. function myfunction()",
        buttonD: "D. Neither",
        answer: "C"
    },
    {
        question: "How do you call a function named myFunction?",
        buttonA: "A. call function myFunction()",
        buttonB: "B. call myFunction()",
        buttonC: "C. myFunction()",
        buttonD: "D. ",
        answer: "C"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        buttonA: "A. if == 5",
        buttonB: "B. if i ==5 then",
        buttonC: "C. if i = 5 then",
        buttonD: "D. if(i==5)",
        answer: "A"
    },
];
start.addEventListener("click", function(event) {
    timeLeft = 120;
    startPage.setAttribute("style", "display: none");
    questionGroup.setAttribute("style", "display: block");
    
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
    score = 0;
    availableQuestion = [...arrayOfQuestion];
    newQuestion();
} 

function newQuestion(){
    var indexQuestion = Math.floor(Math.random()* availableQuestion.length);
    currentQuestion = availableQuestion[indexQuestion];
    questions.textContent = currentQuestion.question;

    buttons.forEach(function(button){
     var letter = button.dataset["letter"];
     button.textContent = currentQuestion["button" + letter];
    });

    availableQuestion.splice(indexQuestion, 1);
    var allquestions = 'Done'
    if (availableQuestion.length === 0){
        questionGroup.setAttribute("style", "display: none");
        endQuiz.setAttribute("style", "display: block");
        allquestions = timeLeft -= 200;
        
    };

};

buttons.forEach(function(button){
    button.addEventListener('click', function(event){
        event.preventDefault();
        var choice = event.target;
        var answerPick = choice.dataset["letter"];

        var incorrect = 'incorrect';
        if( answerPick !== currentQuestion.answer){
          incorrect = timeLeft -= 5
          answerIs.textContent = "Incorrect"
        } else {
            incorrect = score += correctQuestion;
            answerIs.textContent = "Correct"
           yourScore.textContent = "Your Score " + incorrect + ".";
        };

        console.log(answerPick === currentQuestion.answer);
        newQuestion();
    });



});
console.log(score);
startGame();