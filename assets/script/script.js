
var question = document.getElementById("question");
var button = Array.from(document.getElementsByClassName("btn"));
var startButton = document.getElementById("start-control");
var answerIs = document.getElementById("answer-is");
var questions = document.getElementById("questions");
var timer = document.getElementById("timer");
var startPage = document.getElementById("start-quiz");
var endQuiz = document.getElementById("end-quiz")

var currentQuestion = {};
var acceptingQuestion = true;
var score = 0;
var questionCounter = 0;
var availableQuestion = []
var arrayOfQuestion = [
    {
        question: "What is function 1",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
            

        ],
    },
    {
        question: "What is function 2",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
        ]
    },
    {
        question: "What is function 3",
        answer:[
           {text: "answer 1 is this", correct: true},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
        ]
    },
    {
        question: "What is function 4",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
        ]
    },
    {
        question: "What is function 5",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
        ]
    },
    {
        question: "What is function 6",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
        ]
    },
    {
        question: "What is function 7",
        answer:[
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: true},
           {text: "answer 1 is this", correct: false},
           {text: "answer 1 is this", correct: false},
        ]
    }
]

startButton.addEventListener("click", function() {
    var timeLeft = 3;
    startPage.setAttribute("style", "display: none");
    questions.setAttribute("style", "display: block");
    
  
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
        questions.setAttribute("style", "display: none");
        endQuiz.setAttribute("style", "display: block");
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
      }
    }, 1000);
        
});

function startGame(){
    questionCounter = 0;
    score = 0; 
    availableQuestion = [...arrayOfQuestion];
    console.log(availableQuestion);
    getNewQuestion();
}
function getNewQuestion() {
    questionCounter++;
    var indexquestion = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[indexquestion];
    arrayOfQuestion.innerText = currentQuestion.arrayOfQuestion;

}


startButton.addEventListener('click', startGame)



// 1. make a button in html
// 2. create a timer
    //  a. make a timer function in javascript
// 3. make an event listener - put it on the button /correct it to the buttton
// 4. present/show a question in html
    // maybe: hide question in html before ready
    // make an global variable arrary of all questions in javascript
            // question is going to be an object
// this is your question 
         
// //  code for target something in nested in nexted structre of objects and arrays
// var clickedAnswer = document.querySelector('[answer-choice="1"]')
// // one way to use
// arrayOfQuestion[0].answer[1] 
// // another way to use
// if ( clickedAnswer.getAttribute("answer-choice") == arrayOfQuestion[0].correctAnswer){
//     // give them points
// }










// // 1. when I answer a question
// // 2. then I am presented with another question
//     // 1a.making a button to click answer choices or make the answer choice a button
//     // 2a. hide the previous or make the question container change textor remove the container element







// // WHEN I answer a question incorrectly
// // THEN  time is subtracted from the clock
// // 1. if statement to check if the answer choice select is correct
//     // if (wrong answer is clicked) {
//         // do something with variable that keeps track of total time
//         // time left timeleft = timeLeft - 1
//     // }
