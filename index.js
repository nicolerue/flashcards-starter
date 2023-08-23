// This is where your project starts.

console.log("Your project is running...");

const { cardData } = require("./src/data.js");
const { createCard } = require("./src/card.js");
const { createDeck, countCards } = require("./src/deck.js");
const { createRound } = require("./src/round.js");

const { printMessage, printQuestion, printReport } = require("./src/game.js");

function start() {
  const cards = cardData.map((el) => {
    return createCard(el.id, el.question, el.answers, el.correctAnswer);
  });
  const deck = createDeck(...cards);
  const round = createRound(deck);
  printMessage(deck);
  printQuestion(round);
  printReport(round);
}

start();
