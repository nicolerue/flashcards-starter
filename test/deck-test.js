const chai = require("chai");
const expect = chai.expect;

const { createDeck, countCards } = require("../src/deck.js");
const { createCard } = require("../src/card");

describe("deck", function () {
  it("should be able to create a deck with an array of card objects ", function () {
    const card1 = createCard(
      1,
      `Where can you find Koalas?`,
      ["Canada", "US", "Austrailia"],
      "Australia"
    );

    const card2 = createCard(
      1,
      `Where can you find Coconut Trees?`,
      ["Hawaii", "Anarctica", "Canada"],
      "Hawaii"
    );

    const deck = createDeck(card1, card2);
    expect(deck).to.have.lengthOf(2);
  });
  it("should be able to count the cards in a deck", function () {
    const card1 = createCard(
      1,
      `Where can you find Koalas?`,
      ["Canada", "US", "Austrailia"],
      "Australia"
    );

    const card2 = createCard(
      1,
      `Where can you find Coconut Trees?`,
      ["Hawaii", "Anarctica", "Canada"],
      "Hawaii"
    );
    const deck = createDeck(card1, card2);

    const numCards = countCards(deck);
    expect(numCards).to.equal(2);
  });
});

//QUESTIONS. How is NPM test testing all the different files?
//What is I
