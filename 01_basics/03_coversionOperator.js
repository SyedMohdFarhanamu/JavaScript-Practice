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
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************OPERATOR***********************************
// ****************OPERATIONS******************************

let value = 3
let negvalue = -value
// console.log(negvalue);  // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/3);
// console.log(2**2);
// console.log(5%2);

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// This one is not right way to code
// 1.

// console.log("1" + 2); // 12
// console.log(1 + "2");  //  12
// console.log("1" + 2 + 2);  //  122 --> if first one is string then take rest of all as string.
// console.log(1 + 2 + "2");  //  32 --> if first one is integer then take rest of all as integer.

// console.log(typeof "1" + 2); // string2
// console.log(typeof 1 + "2");  //  number2
// console.log(typeof "1" + 2 + 2);  //  string22
// console.log(typeof 1 + 2 + "2");  //  number22

// 2.
// console.log( (3 + 4) * 5 % 3);  // use parenthesis for mathematical operation 

// 3.
// console.log(true);  //  true
// console.log(+true);  // 1
// console.log(+"");  // 0


// 4. 
let num1, num2, num3

num1 = num2 = num3 = 2 + 2  //  Not right way 

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

let x = 3;
const y = x++;
console.log(x , y);
// x is 4; y is 3

let x2 = 3;
const y2 = ++x2;
console.log(x2 , y2);
// x2 is 4; y2 is 4
