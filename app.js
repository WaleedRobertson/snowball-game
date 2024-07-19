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

/*-------------------------------- Variables --------------------------------*/
let currentQuestion 
/*------------------------ Cached Element References ------------------------*/
const startGameButton = document.querySelector("#start-game-button");
const easyButton = document.querySelector('#easy-button');
const mediumButton = document.querySelector('#medium-button');
const difficultButton = document.querySelector('#difficult-button');
const questionStage = document.querySelector('.question-stage');



/*-------------------------------- Functions --------------------------------*/
for (i = 0; i < easyQuestions.length; i++){
currentQuestion = easyQuestions[i]
questionStage.appendChild()
}

/*----------------------------- Event Listeners -----------------------------*/
startGameButton?.addEventListener('click', () => {
    window.location.href = "./Difficulty-level-page.html";
})

easyButton?.addEventListener('click', () => {
    window.location.href = "./questions.html";
})

mediumButton?.addEventListener('click', () => {
    window.location.href = "./questions.html";
})

difficultButton?.addEventListener('click', () => {
    window.location.href = "./questions.html";
})

//add event listeners to the incorrect and correct answers 



//Whats happening when user clicks on difficulty button: redirected tp questions page DONE 
//Loop through data set (easyQuestions, mediumQuestions and difficultQuestions) and display on the questions.html 
//Each value of array (questions and answers) to display on display box automatically upon redirection to the question page 
