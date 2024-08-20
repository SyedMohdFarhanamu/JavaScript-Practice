// 1st Part-1

const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);    // "this" --> for Memory Current Context
        console.log(this);  // "this"  for memory current context
    }

}

// console.log(user.username)
// console.log(user.getUserDetails());


// 1st Part-2

// 'this' used in global context
const user1 = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
    }

}

// console.log(this);  // o/p --> {} empty object


// 2nd Part-1 

// function User(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne = User('Syed',12,true)
// const userTwo = User('chai', 11, false)
// console.log(userOne) //  { username: 'chai',loginCount: 11,isLoggedIn: false }
// This Override Problem b/c only ONE memory Context is here.
// So Use "new" keyword to create multiple m/m context to handle individual instance

// 2nd Part-2 

// Use 'new' keyword to create multiple m/m context to handle individual instance.
// function User2(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     return this
// }

// const userOne2 = new User2('Syed',12,true)
// const userTwo2 = new User2('chai', 11, false)
// console.log(userOne2)  // User { username: 'Syed', loginCount: 12, isLoggedIn: true }
// console.log(userTwo2)  // User { username: 'chai', loginCount: 11, isLoggedIn: false }


// 2nd Part-3

// if not used "return this" 
// IMPICITLY define "return this" so don't use "return this"
// function User2(username, loginCount, isLoggedIn){
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn

//     // return this
// }

// const userOne2 = new User2('Syed',12,true)
// const userTwo2 = new User2('chai', 11, false)
// console.log(userOne2)  // User { username: 'Syed', loginCount: 12, isLoggedIn: true }
// console.log(userTwo2)  //  User { username: 'chai', loginCount: 11, isLoggedIn: false }


// 2nd Part 4

// constructor :- reference of itself
// instanceof :- The instanceof operator returns true if an object is an instance of a specified object
function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);  // [Function: User] by constructor, reference of itself
console.log(userTwo);
console.log(userOne instanceof User);  // true
console.log(userOne instanceof Object);  // true
console.log(userOne instanceof Array);  //  true
