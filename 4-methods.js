'use strict';

const methods = iface => {
let result = [];
for(let prop in iface) {
  result.push([prop, iface[prop].length]);
}
return result;
};
let iface = {
  m1: (x) => [x],
  m2: function (x, y) {
  return [x, y];
  },
  m3(x, y, z) {
  return [x, y, z];
}
};
let r = methods(iface);
console.log(r);
module.exports = { methods };
