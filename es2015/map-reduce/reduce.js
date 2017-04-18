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

//animals();

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

//animalsV1();

/**
 * An array of partial sums
 * arr = [1,2,3,4,5]
 * arr = [-2,-1,0,1]
 *
 * getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
 */

function partialSums(arr) {
  let result = [];

  let totalSum = arr.reduce( (previousValue, currentValue, index, currentArr) => {
    console.log(`previousValue: ${previousValue}\nindex: ${index}`);

    result.push(previousValue);

    return previousValue + currentValue;
  });

  result.push(totalSum);

  console.log(`total: ${result}\narr: ${arr}`);
}

partialSums([-2,-1,0,1]);
