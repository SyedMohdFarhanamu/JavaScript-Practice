// singleton
// Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",    // every Key behind the track treated as STRING
    "full name": "Hitesh Choudhary",// so full name cannot access by dot(.)
    age: 18,
    [mySym]:"mykey1", // mySym is treated as SYMBOL Data type, use BRACKET
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email);
// console.log(JsUser['email']);  // this is best way to practice
// console.log(JsUser["full name"]); // so full name cannot access by dot(.)
// console.log(JsUser[mySym]);
// console.log(typeof mySym);
// console.log(typeof JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // freeze the data 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // backtik-> string interpolation
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

