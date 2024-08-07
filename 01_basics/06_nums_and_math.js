const score = 400
console.log(score);
console.log(typeof score);  // number datatype

const balance = new Number(100)
console.log(balance);
console.log(typeof balance);  // Number of object class

console.log(balance.toString().length);
console.log(balance.toFixed(1));  // USED IN E_COMMERCE
console.log(typeof balance.toFixed(1));  // return into STRING


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));  //  used in calculation
console.log(otherNumber.toPrecision(3));
console.log(typeof otherNumber.toPrecision(3)); // return into STRING


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // TO CONVERT INDIAN NUMBER SYSTEM

//  ++++++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));  // UPPER value
console.log(Math.floor(4.9));  //  LOWER value
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)