//  1st
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);  // CURRENT CONTEXT 
        
    }
}

// user.welcomeMessage()  //  hitesh , welcome to website
// user.username = "farhan"
// user.welcomeMessage()  //  farhan , welcome to website


//  2nd

const user1 = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  // CURRENT CONTEXT 
        
    }
}

console.log(this);  //  {}  --> i am in NODE enviroment so there is no global context that's why empty object.


//  3rd

function chai(){
    console.log(this);
    
}
chai()

//  4th
function chai1(){
    let username = 'hitesh'
    console.log(this.username);  //  cannot call username by this keuword within the function
    
}
chai1()  //  undefined

// ARROW FUNCTION  SYNTAX -->  () => {}
// 1st
const chai2 = () => {
    let username = 'hitesh'
    console.log(this.username);  //  cannot call username by this keuword within the function
}
chai2()  //  undefined

// 2nd
const chai3 = () => {
    let username = 'hitesh'
    console.log(this);  
}
chai3()  //  {} empty object

// 1st  Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,7))  //  10

// 2nd  Implicit return  2.a- No {},No return, No()
const addTwo1 = (num1, num2) => num1 + num2
console.log(addTwo1(3,9));  //  12

// OR 2nd  2.b-
// for {} use return keyword
// for () cannot use return keyword
const addTwo2 = (num1, num2) => (num1 + num2)
console.log(addTwo2(3,12));  //  15

// want to return Object
const addTwo3 = (num1, num2) => ({username: "hitesh"})
console.log(addTwo3(3,12));  //  { username: 'hitesh' }





