// map.js

"use strict";

let animals = ["cat", "dog", "fish"];
let lengths = animals.map( (animal) => {
  return animal.length;
});

console.log(lengths);
