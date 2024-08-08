// Immediately Invoked Function Expressions (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined. 
// 2 major reason to use IIFE
  // 1. Don't want to get polluted with global variable
  // 2. Immediately Excute
  // Syntax ->  ()()    1st parenthesis is for func defination
  // 2nd parenthesis is for excution

(function chai(){
    console.log("DB CONNECTED");  //  DB CONNECTED
    
})();  // USE ; when more than 1 or 2 IIFE present.
//  B/C IIFE does not know where to stop the function exceution.

// By Arrow function
(() => {
    console.log("DB CONNECTED TWO");  //  DB CONNECTED TWO
    
})(); //  // USE ; when more than 1 or 2 IIFE present.

// 2nd 
(function chai1(){
    console.log("DB CONNECTED");  //  DB CONNECTED
    
})();  // USE ; when more than 1 or 2 IIFE present.
//  B/C IIFE does not know where to stop the function exceution.

// By Arrow function
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);  //  DB CONNECTED TWO farhan
    
})("farhan")