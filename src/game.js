const data = require("./data");
const prototypeQuestions = data.prototypeData;
const util = require("./util");
const { countCards } = require("../src/deck.js");

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printReport(round) {
  if (round.turns == 5) console.log("YAYYYY");
}

function printQuestion(round) {
  util.main(round);
}

module.exports = { printMessage, printQuestion, printReport };
