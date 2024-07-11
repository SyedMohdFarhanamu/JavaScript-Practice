let score = "33"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
/* 
string
string
number
*/
let score1 = "33abc"

//console.log(typeof score1);
//console.log(typeof(score1));

let valueNumber = Number(score1)
//console.log(typeof valueNumber);
//console.log(valueNumber);
/*
string
string
number
NaN
*/

let score2 = null

//console.log(typeof score2);
//console.log(typeof(score2));

let valueNumber2 = Number(score2)
//console.log(typeof valueNumber2);
//console.log(valueNumber2);
/*
object
object
number
0
*/


let score3 = true

//console.log(typeof score3);
//console.log(typeof(score3));

let valueNumber3 = Number(score3)
//console.log(typeof valueNumber3);
//console.log(valueNumber3);

/*
boolean
boolean
number
1
*/

let score4 = undefined

//console.log(typeof score4);
//console.log(typeof(score4));

let valueNumber4 = Number(score4)
//console.log(typeof valueNumber4);
//console.log(valueNumber4);

/*
undefined
undefined
number
NaN
*/

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);   // true


// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
