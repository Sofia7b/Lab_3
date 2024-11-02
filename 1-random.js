'use strict';

const random = (min, max) => {
  // Generate random Number between from min to max
  // Use Math.random() and Math.floor()
  // See documentation at MDN
  return Math.floor(min + (max - min)*Math.random());

};
console.log(random(-100, 100));
module.exports = { random };
