const chrono = require('chrono-node');

let d1 = '01.02.2015';
let d2 = '31.01.2015';
let d3 = '01.31.2015';

console.log(chrono.parseDate(d1));
console.log(chrono.de.parseDate(d1));
console.log(chrono.parseDate(d2));
console.log(chrono.de.parseDate(d2));
console.log(chrono.parseDate(d3));
console.log(chrono.de.parseDate(d3));