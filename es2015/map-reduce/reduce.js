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
