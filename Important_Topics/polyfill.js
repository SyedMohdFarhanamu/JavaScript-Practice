// POLYFILL
// A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.
// EXAMPLE :- if my browser does not have "bind()" so we have to write own bind() function.
// 1st way


let name = {
    firstname:"Virat",
    lastname: "Kholi"
}

let printName = function(hometown,state,country){
    console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , "+ country)
}
// below one is done by bind() function
let printMyName = printName.bind(name,"Gorakhpur")
printMyName("Uttar Pradesh", "India")

// here we create own bind() that is Polyfill 
Function.prototype.mybind = function(...args){
    let obj = this   // here 'this' --> reference of printName function.
    params = args.slice(1) // remove the first element from the list. return in array form
    return function(...args2){   // return function --> printMyName2
        obj.apply(args[0],[...params,...args2])
    }
}
let printMyName2 = printName.mybind(name,"Gorakhpur")
printMyName2("Uttar Pradesh", "India")


//  -------------------------------------------------------------------------------------------------------------
// 2nd way


// let name = {
//     firstname:"Virat",
//     lastname: "Kholi"
// }

// let printName = function(hometown,state,country){
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state + " , "+ country)
// }
// // below one is done by bind() function
// let printMyName = printName.bind(name,"Gorakhpur","Uttar Pradesh", "India")
// printMyName()

// // here we create own bind() that is Polyfill 
// Function.prototype.mybind = function(...args){
//     let obj = this   // here 'this' --> reference of printName function.
//     params = args.slice(1) // remove the first element from the list. return in array form
//     return function(){   // return function --> printMyName2
//         obj.apply(args[0],params)
//     }
// }
// let printMyName2 = printName.mybind(name,"Gorakhpur","Uttar Pradesh", "India")
// printMyName2()