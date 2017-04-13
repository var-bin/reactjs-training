// map.js

"use strict";

/**
 * map() with anonymous in-line functions
 */

function animals() {
  let animals = ["cat", "dog", "fish"];
  let lengths = animals.map( (animal) => {
    return animal.length;
  });

  console.log(`animals(): ${lengths}`);
}

animals();

function animalsV1() {
  let animals = ["cat", "dog", "fish"];

  function _getLength(word) {
    return word.length;
  }

  console.log("animalsV1(): " + animals.map(_getLength));
}

animalsV1();
