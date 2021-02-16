const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?"
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [ '1) Who was the first American woman in space? ', '2) True or False: 5000 meters = 5 kilometers ', '3) (5 + 3)/2 * 10 = ? ', '4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', '5) What is the minimum crew size for the ISS? ' ];
let correctAnswers = ["Sally Ride",
"true",
"40",
"Trajectory",
"3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  name = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let i = 0;
while (i < questions.length){
  candidateAnswers.push(input.question(questions[i]));
  console.log(`Your Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n`);
  i++;
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  candidateScore = 0;
  maxScore = 5;

  if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()){
    candidateScore += 1;
  }
  if (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()){
    candidateScore += 1;
  }
  if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()){
    candidateScore += 1;
  }
  if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()){
    candidateScore += 1;
  }
  if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()){
    candidateScore += 1;
  }
  
  let grade = candidateScore / maxScore * 100;

  console.log(`>>> Final Score: ${grade}% (${candidateScore} / ${maxScore} were correct) <<<`);
  if (grade >= 80){
    console.log(`>>> Congratulations! You Passed! <<<`);
  } else {
    console.log(">>> Sorry but you failed the test. <<<")
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello ${name}!`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};