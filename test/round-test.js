const chai = require("chai");
const expect = chai.expect;

const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
} = require("../src/round.js");
const { createCard } = require("../src/card.js");
const { createDeck } = require("../src/deck.js");

describe("round", function () {
  it("should have a property called deck which holds the array containing the deck of cards  ", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    expect(round.deck).to.equal(deck);
  });

  it("should have a property called currentCards which holds the first card in the deck  ", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    expect(round.currentCard.id).to.equal(1);
  });

  it("should have a turns property that starts as 0", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    expect(round.turns).to.equal(0);
  });
  it("should have an incorrectGuesses property that starts as an empty array", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  it("should be able to update the turns count", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    takeTurn("bear", round);
    expect(round.turns).to.deep.equal(1);

    takeTurn("bats", round);
    expect(round.turns).to.equal(2);
  });

  it("should be able to evaluate the answer and provide feedback whether the answer was correct or incorrect", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    const outcome = takeTurn("bear", round);
    expect(round.turns).to.deep.equal(1);
    expect(outcome).to.equal("incorrect!");

    const outcome2 = takeTurn("bats", round);
    expect(round.turns).to.equal(2);
    expect(outcome2).to.equal("correct!");
  });
  it("should calculate and return the percentage of correct guesses", function () {
    const card1 = createCard(
      1,
      "What is the only mammal capable of flight?",
      ["bear", "human", "elephants", "bats"],
      "bats"
    );

    const card2 = createCard(
      2,
      "how many noses does a slug have?",
      [1, 2, 3, 4],
      4
    );

    const card3 = createCard(
      3,
      "Does a starfish have a brain?",
      ["yes", "no"],
      "yes"
    );

    const deck = createDeck(card1, card2, card3);
    const round = createRound(deck);

    takeTurn("bear", round);

    takeTurn("bats", round);

    const percentage = calculatePercentCorrect(round);

    expect(percentage).to.equal(50);
  });
});
