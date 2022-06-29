/*Add your JavaScript here*/
var freeGuyScore = 0;
var jurassicParkScore = 0;
var inceptionScore = 0;
var questionCount = 0;

var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");

function freeGuy() {
  freeGuyScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " freeGuyScore = " + freeGuyScore);

  if (questionCount == 4) {
    console.log("The quiz is done!");
    updateResult()
}}

function jurassicPark() {
  jurassicParkScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " jurassicParkScore = " + jurassicParkScore);

  if (questionCount == 4) {
    console.log("The quiz is done!");
    updateResult()
}}

function inception() {
  inceptionScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + " inceptionScore = " + inceptionScore);

  if (questionCount == 4) {
    console.log("The quiz is done!");
    updateResult()
}}

function updateResult(){
  if (freeGuyScore >= 2){
    result.innerHTML = "A good Science Fiction movie for you is Free Guy! You would probably like movies with action, comedy, and futuristic tech. Enjoy!"
    console.log("A good Science Fiction movie for you is Free Guy! You would probably like movies with action, comedy, and futuristic tech. Enjoy!")
    
  } else if (jurassicParkScore >= 2){
    result.innerHTML = "A good Science Fiction movie for you is Jurassic Park or Jurassic World! You would probably like sci-fi movies that are dark, suspensful, and are really interesting. Enjoy!"
    console.log("A good Science Fiction movie for you is Jurassic Park or Jurassic World! You would probably like sci-fi movies that are dark, suspensful, and are really interesting. Enjoy!")
    
  } else if (inceptionScore >= 2){
    result.innerHTML = "A good Science Fiction movie for you is Inception! You would probably like sci-fi movies that are mind benders, have many layers, and always keep you on the edge of your seat. Enjoy!"
    console.log("A good Science Fiction movie for you is Inception! You would probably like sci-fi movies that are mind benders, have many layers, and always keep you on the edge of your seat. Enjoy!")
  } else {
    result.innerHTML = "Please try again. Your results were inconclusive."
    console.log("Please try again. Your results were inconclusive.")
  }
}

q1a1.addEventListener("click", freeGuy);
q1a2.addEventListener("click", jurassicPark);
q1a3.addEventListener("click", inception);

q2a1.addEventListener("click", freeGuy);
q2a2.addEventListener("click", jurassicPark);
q2a3.addEventListener("click", inception);

q3a1.addEventListener("click", freeGuy);
q3a2.addEventListener("click", jurassicPark);
q3a3.addEventListener("click", inception);

q4a1.addEventListener("click", freeGuy);
q4a2.addEventListener("click", jurassicPark);
q4a3.addEventListener("click", inception);

