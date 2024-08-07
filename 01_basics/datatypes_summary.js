//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n
// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // Arrays
let myObj = {                                    // Objects
    name: "hitesh",
    age: 22,
}

const myFunction = function(){                 // Function
    console.log("Hello world");
}

console.log(typeof score);  // number
console.log(typeof scoreValue);  //  number
console.log(typeof isLoggedIn);  //  boolean
console.log(typeof outsideTemp);  //  object
console.log(typeof userEmail);  //  undefined
console.log(typeof anotherId);  //  symbol
console.log(typeof bigNumber);  //  bigint
console.log(typeof heros);  //  object
console.log(typeof myObj);  //  object
console.log(typeof myFunction);  //  function-object
