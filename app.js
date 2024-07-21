//Define any variables used to track the state of the game
// let startGame; DONE
// let easyButton; DONE
// let mediumButton; DONE
// let difficultButton; DONE
// let easyQuestions; DONE
// let mediumQuestions; DONE 
// let difficultQuestions; DONE
// let userChoice;
// let currentQuestion; DONE
// let correctAnswer; 
// let incorrectAnswer; 
// let winningMetric;
// let winningCondition;
// let winningPage;
// let losingMetric; 
// let losingCondition; 
// let losingPage;
// let playAgainButton;  

//Define the required constants:

// 3 data arrays coorelating with difficulty level selected 

// 3 incorrectAnswers will create losingCondition 

// 10 correctAnswers will create winningCondition

//Handle a player clicking a button
// startGame button on landing page redirecting user to difficulty page //DONE USING A DOM EVENT

// (easyButton, mediumButton, difficultButton) > randomly output questions from easyQuestions, mediumQuestions and difficultQuestions //math.randon()

// clicking correctAnswer will redirect user to next question and enhance winningMetric //addEventListener to DOM element => 

// clicking one of the incorrectAnswers will keep user on current question and enhance the losingMetric //addEventListener to DOM element

// clicking the playAgain button after losingConditions/ winningConditions are met will restart the game

//  //Handle generating random selections for the computer player

// the goal is to iterate through designated data set (easyQuestions, mediumQuestions or difficultQuestions) and return currentQuestion in a random order

// //Compare the player choice to the computer choice, and check for a winner

// if userChoice is correctAnswer proceed to next currentQuestion  
// if userChoice is incorrectAnswer stay on currentQuestion

// // Render a win/lose message to the player 

// losingCondition being met will redirect user to losingPage where  playAgain button will be present 

// winningCondition being met will redirect user to 
// winningPage where a playAgain button will be present 

/*-------------------------------- Constants --------------------------------*/
const easyQuestions = [
    {
        question: "What is the correct syntax to print a message in the console in JavaScript?",
        correctAnswer: "console.log('Hello World')",
        options: [
            "console.print('Hello World')",
            "print('Hello World')",
            "log.console('Hello World')",
            "console.log('Hello World')" // Correct
        ]
    },
    {
        question: "Which of the following is a JavaScript data type?",
        correctAnswer: "string",
        options: [
            "float",
            "string", // Correct
            "double",
            "char"
        ]
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        correctAnswer: "//",
        options: [
            "//", // Correct
            "#",
            "<!-- -->",
            "/* */"
        ]
    },
    {
        question: "How do you declare a variable in JavaScript?",
        correctAnswer: "var myVar;",
        options: [
            "var myVar;", // Correct
            "variable myVar;",
            "v myVar;",
            "myVar = var;"
        ]
    },
    {
        question: "Which method is used to convert a JSON string into a JavaScript object?",
        correctAnswer: "JSON.parse()",
        options: [
            "JSON.parse()", // Correct
            "JSON.stringify()",
            "JSON.objectify()",
            "JSON.convert()"
        ]
    },
    {
        question: "What will the following code return: Boolean(10 > 9)?",
        correctAnswer: "true",
        options: [
            "false",
            "true", // Correct
            "undefined",
            "null"
        ]
    },
    {
        question: "Which of the following is the correct way to create an array in JavaScript?",
        correctAnswer: "var arr = [1, 2, 3, 4]",
        options: [
            "var arr = '1, 2, 3, 4'",
            "var arr = array(1, 2, 3, 4)",
            "var arr = [1, 2, 3, 4]", // Correct
            "var arr = (1, 2, 3, 4)"
        ]
    },
    {
        question: "What is the output of the following code: console.log(typeof [])?",
        correctAnswer: "object",
        options: [
            "object", // Correct
            "array",
            "null",
            "undefined"
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        correctAnswer: "function myFunction() {}",
        options: [
            "function myFunction() {}", // Correct
            "create myFunction() {}",
            "def myFunction() {}",
            "new function myFunction() {}"
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        correctAnswer: "onclick",
        options: [
            "onmouseover",
            "onchange",
            "onclick", // Correct
            "onmouseclick"
        ]
    }
]
const mediumQuestions = [
    {
        question: "What is the purpose of the 'data-' attribute in HTML5?",
        answer: "The 'data-' attribute is used to store custom data private to the page or application."
    },
    {
        question: "How can you make a list that lists its items with squares in CSS?",
        answer: "list-style-type: square;"
    },
    {
        question: "What is the difference between 'id' and 'class' attributes in HTML?",
        answer: "The 'id' attribute is unique and used for a single element, while 'class' can be used to style multiple elements."
    },
    {
        question: "How do you create a flex container in CSS?",
        answer: "display: flex;"
    },
    {
        question: "What does the 'z-index' property do in CSS?",
        answer: "The 'z-index' property specifies the stack order of an element."
    },
    {
        question: "What is event delegation in JavaScript?",
        answer: "Event delegation is a technique involving adding a single event listener to a parent element that will fire for all descendants matching a selector."
    },
    {
        question: "How do you stop event propagation in JavaScript?",
        answer: "event.stopPropagation();"
    },
    {
        question: "What is the difference between '==', '===', and 'Object.is' in JavaScript?",
        answer: "'==' compares values with type coercion, '===' compares values without type coercion, and 'Object.is' is similar to '===' but also treats NaN as equal to NaN and -0 as not equal to +0."
    },
    {
        question: "How do you select all elements with a 'data-test' attribute in CSS?",
        answer: "[data-test]"
    },
    {
        question: "What is the purpose of the 'defer' attribute in a script tag in HTML?",
        answer: "The 'defer' attribute tells the browser to execute the script after the HTML document has been fully parsed."
    }
]
const difficultQuestions = [
    {
        question: "What does the acronym HTML stand for?",
        answer: "HyperText Markup Language"
    },
    {
        question: "In CSS, what property is used to control the spacing between elements?",
        answer: "margin"
    },
    {
        question: "What does 'NaN' stand for in JavaScript?",
        answer: "'Not a Number'"
    },
    {
        question: "What is the difference between 'undefined' and 'null' in JavaScript?",
        answer: "'undefined' means a variable has been declared but not assigned a value, whereas 'null' is an assignment value representing a lack of an identifiable object."
    },
    {
        question: "In CSS, what is a pseudo-class?",
        answer: "A keyword added to selectors that specifies a special state of the selected elements."
    },
    {
        question: "What does 'async' do in JavaScript?",
        answer: "It specifies that a function will return a Promise."
    },
    {
        question: "What is event delegation in JavaScript?",
        answer: "Event delegation refers to the process of using a single event listener to manage events for multiple elements."
    },
    {
        question: "What is a 'closure' in JavaScript?",
        answer: "A closure is the combination of a function and the lexical environment within which that function was declared."
    },
    {
        question: "What is the 'box model' in CSS?",
        answer: "The CSS box model describes the rectangular boxes that are generated for elements in the document tree."
    },
    {
        question: "What is the difference between '=='' and '===' in JavaScript?",
        answer: "'==' checks for equality of values, while '===' checks for equality of values and types."
    }
]

/*-------------------------------- Variables --------------------------------*/
let currentDifficulty;
let rounds;
let currentRound;
let currentAnswer;
let correctAnswers;

/*------------------------ Cached Element References ------------------------*/
const startGameButton = document.querySelector("#start-game-button");
const easyButton = document.querySelector('#easy-button');
const mediumButton = document.querySelector('#medium-button');
const difficultButton = document.querySelector('#difficult-button');
//error somewhere in grabbing question-stage element
const questionStage = document.querySelector('#question-stage');
// const questionElement = document.createElement('p');
const currentQuestion = document.querySelector('#questions')
const answerButtons = document.querySelectorAll('.answer')

/*----------------------------- Event Listeners -----------------------------*/
answerButtons.forEach((button) => {
    button.addEventListener('click', checkAnswer)
})

/*-------------------------------- Functions --------------------------------*/
function checkAnswer(event) {
    if (event.target.textContent === currentAnswer) {
        // I can get correct answers this way
        correctAnswers += 1
        console.log('whoopdie fucking do you got it')
    }
    else {
        // Wrong case
        console.log('Wrong bitch')
    }
    currentRound ++
    renderRound(currentRound)
}

function renderRound(round) {
    // First step is to get questoins to show up in your page
    currentQuestion.textContent = easyQuestions[round - 1].question
    currentAnswer = easyQuestions[round - 1].correctAnswer
    easyQuestions[round - 1].options.forEach((option, index) => {
        answerButtons[index].textContent = option
    })
}

function init() {
    // Initializes the game
    currentDifficulty = 'easy'
    rounds = 10
    currentRound = 1
    correctAnswers = 0
    renderRound(currentRound)
}

// Start the game
init()