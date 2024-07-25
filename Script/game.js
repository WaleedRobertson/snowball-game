const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreElement = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {}
let acceptingAnswers = true
let score = 0;
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'What is the correct syntax to print a message in the console in JavaScript?',
        choice1: "console.print('Hello World')",
        choice2: "print('Hello World')",
        choice3: "log.console('Hello World')",
        choice4: "console.log('Hello World')",
        answer: 4,
    },
    {
        question: 'Which of the following is a JavaScript data type?',
        choice1: 'float',
        choice2: 'string',
        choice3: 'double',
        choice4: 'char',
        answer: 2,
    },
    {
        question: 'Which symbol is used for single-line comments in JavaScript?',
        choice1: '//',
        choice2: '#',
        choice3: '<!-- -->',
        choice4: '/* */',
        answer: 1 ,
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        choice1: 'var myVar;',
        choice2: 'variable myVar;',
        choice3: 'v myVar;',
        choice4: 'myVar = var;',
        answer: 1 ,
    },
    {
        question: 'Which method is used to convert a JSON string into a JavaScript object?',
        choice1: 'JSON.parse()',
        choice2: 'JSON.stringify()',
        choice3: 'JSON.objectify()',
        choice4: 'JSON.convert()',
        answer: 1,
    },
    {
        question: 'What will the following code return: Boolean(10 > 9)?',
        choice1: 'false',
        choice2: 'true',
        choice3: 'undefined',
        choice4: 'null',
        answer: 2 ,
    },
    {
        question: 'Which of the following is the correct way to create an array in JavaScript?',
        choice1: "var arr = '1, 2, 3, 4'",
        choice2: 'var arr = array(1, 2, 3, 4)',
        choice3: 'var arr = [1, 2, 3, 4]',
        choice4: 'var arr = (1, 2, 3, 4)',
        answer: 3,
    },
    {
        question: 'What is the output of the following code: console.log(typeof [])?',
        choice1: 'object',
        choice2: 'array',
        choice3: 'null',
        choice4: 'undefined',
        answer: 2,
    },
    {
        question: 'How do you create a function in JavaScript?',
        choice1: 'function myFunction() {}',
        choice2: 'create myFunction() {}',
        choice3: 'def myFunction() {}',
        choice4: 'new function myFunction() {}',
        answer: 1 ,
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        choice1: 'onmouseover',
        choice2: 'onchange',
        choice3: 'onclick',
        choice4: 'onmouseclick',
        answer: 3 ,
    }
]

const scorePoints = 100
const maxQuestions = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`
    progressBarFull.style.width = `${(questionCounter/maxQuestions) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number] 
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true 


}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) 
        return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number'] 

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(scorePoints)
        }

        else {

            window.location.href = "/index.html"; 
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 1000)
    })
})


// incrementScore = num => {
//     score +=num
//     scoreText.innerText = score
// }

incrementScore = (points) => {
    score += points || 1;
    scoreElement.textContent = score;
}

startGame()
