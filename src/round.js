function createRound(deckArr, currIndex = 0, incorrectGuesses = [], turns = 0) {
  const roundObj = {
    deck: deckArr,
    currIndex: currIndex,
    currentCard: deckArr[currIndex],
    incorrectGuesses: incorrectGuesses,
    turns: turns,
  };
  return roundObj;
}

function takeTurn(guess, roundObj) {
  const response =
    roundObj.currentCard.correctAnswer === guess ? "correct!" : "incorrect!";

  if (roundObj.currentCard.correctAnswer !== guess) {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
  } else {
  }
  roundObj.turns += 1;
  roundObj.currIndex += 1;
  roundObj.currentCard = roundObj.deck[roundObj.currIndex];
  return response;
}

function calculatePercentCorrect(roundObj) {
  const percentage =
    ((roundObj.turns - roundObj.incorrectGuesses.length) / roundObj.turns) *
    100;
  roundObj.percentageCorrect = percentage;
  return percentage;
}

function endRound(roundObj) {
  return `** Round over! ** You answered ${roundObj.percentageCorrect}% of the questions correctly!`;
}
module.exports = { createRound, takeTurn, calculatePercentCorrect, endRound };
