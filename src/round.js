function createRound(
  deckArr,
  currentIndex = 0,
  incorrectGuesses = [],
  turns = 0
) {
  const roundObj = {
    deck: deckArr,
    currentCard: deckArr[currentIndex],
    incorrectGuesses: incorrectGuesses,
    turns: turns,
  };
  return roundObj;
}

function takeTurn(guess, roundObj) {
  roundObj.turns += 1;
  roundObj.currentIndex += 1;
  if (roundObj.currentCard.correctAnswer !== guess) {
    roundObj.incorrectGuesses.push(roundObj.currentCard.id);
    return "incorrect!";
  } else {
    return "correct!";
  }
}

function calculatePercentCorrect(roundObj) {
  // ((total turns - total incorrect)/total turns)*100
  return (
    ((roundObj.turns - roundObj.incorrectGuesses.length) / roundObj.turns) * 100
  );
}
module.exports = { createRound, takeTurn, calculatePercentCorrect };
