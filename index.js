var readlineSync = require("readline-sync");
var score = 0;
var chalk = require("chalk");

var userAnswer = readlineSync.question(chalk.yellow("What is your name? "));
console.log(chalk.blue("Hey " + userAnswer + "!"));
console.log(chalk.blue("Welcome to the Fun With Chess quiz.  Each right answer will fetch you an extra score, and each wrong one will take away one score."));

console.log("--------------------------")


// <---------array of High Score-------->
var highScores = [
  {
    name: "Abhi",
    score: 9,
  }, 
  {
    name: "Chirag",
    score: 8,
  }
]

// <----------array of questions-------------->
var questions = [{
  question: "Who is the current World Champion ? ",
  answer: "Magnus Carlson"
  }, {
  question: "Who is the most famous Indian Chess Grandmaster ",
  answer: "Vishwanathan Anand"  
  }, {
    question: "Bobby Fischer was from which country? ",
    answer: "USA"
  }, {
    question: "Who is the current youngest Grandmaster? ",
    answer: "Abhimanyu Mishtra"
  }, {
    question: "What is the highest chess title anyone can have? ",
    answer: "Grandmaster"
  }, {
    question: "Bobby Fischer won the World Championship by defeating which Russian Grandmaster? ",
    answer: "Borris Spasky"
  }, {
    question: "Which piece of chess cannot move backward? ",
    answer: "Pawn"
  }
]

// showScore function definition
function showScore() {
  console.log(chalk.blue("You socred " + score));
  console.log(chalk.blue("High scores till now are as below."));
  for (var i=0; i<highScores.length; i++) {
    var currentHighScore = highScores[i];
    console.log(chalk.bgGrey(currentHighScore.name + ":" + currentHighScore.score));
  }
  console.log(chalk.blue("If your score is higher than the current highscores, send us screenshot.  Thanks for participating in the quiz"));
}

// play funtion definition
  function play(question, answer) {
    var userAnswer = readlineSync.question(chalk.yellow(question));

    if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("That's right!"));
    score = score + 1;
  } else {
    console.log(chalk.red("I'm afraid, that's wrong!"));
    score = score - 1;
  }
  
  console.log("--------------------------")
}


//loop
for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

showScore()