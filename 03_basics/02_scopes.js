// {}  -->  Scope
// 1st
var c = 300  // done by Prog1

if(true){    //  done by prog2
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);  //  ReferenceError: a is not defined
// console.log(b);  //  ReferenceError: b is not defined
// console.log(c);  //  30  // prog1 want to be 300 but not happened
// that's why we are not used "var" keyword

//  2nd
let a = 300  // done by Prog1

if(true){    //  done by prog2
    let a = 10
    const b = 20
    // console.log("INNER : ", a);  //  INNER :  10
    
}
// console.log(a);  //  300
// console.log(b);//  ReferenceError: b is not defined

// 1st
// Inner scope's var can call outer scope's var
// But outer scope's var can not call inner scope's var
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);  //  ReferenceError: website is not defined
    two()

}
one()  //  hitesh

//  2nd
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);  //  hitesh youtube
    }
    // console.log(website);  //  ReferenceError: website is not defined
}

// console.log(username);  //  ReferenceError: username is not defined


// ++++++++++++++++++++++++++++++++++++++++  IMPORTANT  +++++++++++++++++++++++++++++++++++++++++++++
// 1st

// function
// function addOne(num1){
//     return num1 + 1
// }
// addOne(3)  //  func executed successfully but nothing to print

//  expression 
// const addTwo = function(num2){
//     return num2 + 2
// }
// addTwo(5)  //  func executed successfully but nothing to print

//  2nd

// function
console.log(addOne(3))  //  4
function addOne(num1){
    return num1 + 1
} 

//  expression 
// console.log(addTwo(5))  //  ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num2){
    return num2 + 2
}

