// This is where your project starts.

console.log("Your project is running...");

const { prototypeData } = require("./src/data.js");
const { createCard } = require("./src/card.js");
const { createDeck, countCards } = require("./src/deck.js");
const { createRound } = require("./src/round.js");
const { printMessage, printQuestion } = require("./src/game.js");

function start() {
  const cards = prototypeData.map((el) => {
    return createCard(el.id, el.question, el.answers, el.correctAnswer);
  });
  const deck = createDeck(...cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
}

start();
