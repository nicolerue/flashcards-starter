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
  console.log("correct-answer", roundObj.currentCard.correctAnswer);
  console.log("guess", guess);
  if (roundObj.currentCard.correctAnswer !== guess) {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
    var response = "incorrect!";
  } else {
    var response = "correct!";
  }
  roundObj.turns += 1;
  roundObj.currIndex += 1;
  roundObj.currentCard = roundObj.deck[roundObj.currIndex];
  return response;
}

function calculatePercentCorrect(roundObj) {
  // ((total turns - total incorrect)/total turns)*100
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
