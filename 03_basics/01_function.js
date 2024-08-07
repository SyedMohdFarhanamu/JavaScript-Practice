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
// console.log(loginUserMessage())   //   Syed Mohd Farhan just logged in


// SHOPPING CART
// ... (REST OPERATOR) in function --> all value conevrt to in array
// 1st
function CalculateCartPrice(...num1){
    return num1
}
console.log(CalculateCartPrice(200,300,400)); ///  [ 200, 300, 400 ]

//2nd
function cartPrice(val1,val2,...num1){
    return num1
}
console.log(cartPrice(100,200,300,500,1000,2000,5000));  //  [ 300, 500, 1000, 2000, 5000 ]


// Pass object into the function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.prices}`);
    
}
handleObject(user)  //  Username is hitesh and Price is 199
handleObject(
    {
        username: "Syed Mohd Farhan",
        prices: 388
    }
)                   //  Username is Syed Mohd Farhan and Price is 388


// Pass Array into the function
const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));  //  400
console.log(returnSecondValue([200, 300, 500, 1000]));  //  300



