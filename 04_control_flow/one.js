// if
// Syntax
    // if(condition){

    // }


// const isUserloggedIn = true
// const temperature = 41

// if ( temperature === 51 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// 1st
// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);  //  ReferenceError: power is not defined

// 2nd  This is not good for programming to use "var" keyword
const score = 200
if (score > 100) {
    var power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);  // User power: fly  User power: fly

// Shortend way( IMPLICIT WAY)
const balance = 1000

// if (balance > 500) console.log("test");
// if (balance > 500) console.log("test"), console.log("test2"); //  this is not best way to code

if(balance < 500){
    console.log("less than 500");
    
} else if(balance < 750){
    console.log("less than 750");
    
} else if(balance < 900){
    console.log("less than 900");
    
}else {
    console.log("less than 1200");
    
}

// 3rd
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

