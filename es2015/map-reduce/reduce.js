// reduce.js

"use strict";

/**
 * reduce() with anonymous in-line function
 */

function animals() {
  let animals = ["cat", "dog", "fish"];

  let total = animals.reduce( (sum, word) => {
    console.log(`sum: ${sum}, word: ${word}`);

    return sum + word.length;
  }, 0);

  console.log(`animals(): ${total} ${animals}`);
}

animals();

/**
 * reduce() with named function
 */
function animalsV1() {
  let animals = ["cat", "dog", "fish"];

  function _addLength(sum, word) {
    console.log(`sum: ${sum}, word: ${word}`);

    return sum + word.length;
  }

  let total = animals.reduce(_addLength, 0);

  console.log(`animalsV1(): ${total} ${animals}`);
}

animalsV1();
