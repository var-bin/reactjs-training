"use strict";

let user = {
  name: "Sam",
  totalReplies: 17,
  isBlocked: false
};

user[Symbol.iterator] = function () {
  let properties = Object.keys(this);
  let count = 0;
  let isDone = false;
  
  let next = () => {
    if (count >= properties.lenght) {
      isDone = true;
    }
    
    let value = this[properties[count++]];
    
    return { done: isDone, value };
  };
  
  return { next };
};