function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// 1st method
// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4) //  7
// addTwoNumbers(3,null) //  3
// addTwoNumbers(3,"7")  //  37
// addTwoNumbers(3,"hitesh")  //  3hitesh

// const result = addTwoNumbers(3,5)
// console.log("Result :" ,result);  //  Result : undefined

// So how to solved undefined in result var.

// 2nd method
// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     console.log("Syed Mohd Farhan"); // this line is executed.
    
//     return result
//     console.log("hitesh")  // after return this line never executed.
// }
// const result  = addTwoNumbers(3,5)
// console.log("Result :" ,result);   //  Result : 8

// 3rd method
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    console.log("Syed Mohd Farhan"); // this line is executed.
    
    return number1 + number2
    // console.log("hitesh")  // after return this line never executed.
}
// const result  = addTwoNumbers(3,5)
// console.log("Result :" ,result);   //  Result : 8

// 1st 
// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// loginUserMessage('hitesh')  // nothing printed b/c of only return the value but not used print statement
// console.log(loginUserMessage('hitesh'))  //  hitesh just logged in
// console.log(loginUserMessage(''))  //   just logged in
// console.log(loginUserMessage())  // undefined just logged in

// 2nd
// function loginUserMessage(username){
//     if(!username){                               // if(username === undefined)
//         console.log("Please Enter Username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())  //  Please Enter Userna  //  undefined

// 3rd
function loginUserMessage(username = "Syed Mohd Farhan"){   // deos not go in condition if undefined is present
    if(!username){                               // if(username === undefined)
        console.log("Please Enter Username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())