"use strict";

const btnCheck = document.querySelector(".check");
const guess = document.querySelector(".guess");
const mensagem = document.querySelector(".message");
const scoreDisplay = document.querySelector(".score");
const highscoreDisplay = document.querySelector(".highscore");
const btnAgain = document.querySelector(".again");
const numberDisplay = document.querySelector(".number");

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

btnCheck.addEventListener("click", function () {
  let numero = Number(guess.value);

  if (numero === secretNumber) {
    mensagem.innerText = "Numero correto!";
    highscore++;
    highscoreDisplay.innerText = highscore;
    document.body.style.background = "green";
    numberDisplay.innerText = secretNumber;
    guess.value = "";
    console.log(secretNumber);
    if (document.body.style.background === "green") {
      secretNumber = "???";
    }
  } else if (numero > secretNumber) {
    mensagem.innerText = "Muito alto!";
    score--;
    scoreDisplay.innerText = score;
  } else if (numero < secretNumber && numero > 0 && score > 0) {
    mensagem.innerText = "Muito Baixo!";
    score--;
    scoreDisplay.innerText = score;
  } else if (!numero && score) {
    mensagem.innerText = "Tente novamente!";
  } else if (score == 0) {
    score = 0;
    scoreDisplay.innerText = score;
    highscoreDisplay.innerText = highscore;
    document.body.style.background = "black";
    mensagem.innerText = "Você perdeu.";
    guess.value = "";
  } else if (score <= 0 && !numero) {
    mensagem.innerText = "Você perdeu.";
  } else if (numberDisplay.innerText === secretNumber) {
    secretNumber = "";
  }
});

btnAgain.addEventListener("click", function () {
  score = 20;
  scoreDisplay.innerText = score;
  highscoreDisplay.innerText = highscore;
  document.body.style.background = "black";
  mensagem.innerText = "Comece a adivinhar...";
  guess.value = "";
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log(secretNumber);
  numberDisplay.innerText = "?";
});
