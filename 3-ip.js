'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  // Parse ip address as string, for example '10.0.0.1'
  // to ['10', '0', '0', '1'] to [10, 0, 0, 1]
  // and convert to Number value 167772161 with bitwise shift
  // (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
  // Use Array.prototype.reduce of for loop
  let ips = ip.split('.');
  ips = ips.map(item => parseInt(item));

// let number = (ips[0] << (3*8)) + (ips[1] << (2*8)) + (ips[2] << (1*8)) + (ips[3] << (0*8));

let n = 3;
let number = ips.reduce((acc, item) => acc + (item << (8 * n--)), 0)
return number;

};
/*
console.log(ipToInt('127.0.0.1'), '2130706433');
console.log(ipToInt('10.0.0.1'), '167772161');
console.log(ipToInt('192.168.1.10'), '-1062731510');
console.log(ipToInt('165.225.133.150'), '-1511946858');
console.log(ipToInt('0.0.0.0 '), '0');
*/

module.exports = { ipToInt };
