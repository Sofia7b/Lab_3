'use strict';

const generateKey = (length, possible) => {
  // Generate string of random characters
  // Use Math.random() and Math.floor()
  // See documentation at MDN

  let imax = possible.length - 1;
  let s = '';
  for(let count = 0; count < length; ++ count) {
    let i =  Math.floor(Math.random()*imax);
    s += possible[i];
  }
  return s;
};
// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// const key = generateKey(16, characters);
// console.log(key); 

module.exports = { generateKey };
