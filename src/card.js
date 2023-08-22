function createCard(id, question, possibleAnswers, answer) {
  let card = {
    id: id,
    question: question,
    answers: possibleAnswers,
    correctAnswer: answer,
  };
  return card;
}

module.exports = { createCard };
