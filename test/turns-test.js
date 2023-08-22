const chai = require("chai");
const expect = chai.expect;

const { evaluateGuess } = require("../src/turns");
const { createCard } = require("../src/card");

describe("turns", function () {
  it("should evaluate if a guess to a flashcard question is correct or incorrect", function () {
    const guessWrong = "penguin";
    const cardJs = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );
    const resultWrong = evaluateGuess(guessWrong, cardJs);
    expect(resultWrong).to.equal("incorrect!");

    const guessRight = 8;
    const cardSpider = createCard(
      1,
      "How many legs does a spider have?",
      [2, 4, 5, 6, 8],
      8
    );

    const resultRigt = evaluateGuess(guessRight, cardSpider);
    expect(resultRigt).to.equal("correct!");
  });
});
