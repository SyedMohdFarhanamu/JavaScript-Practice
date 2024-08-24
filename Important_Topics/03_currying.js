// Function Currying 
let multiply  = function(x,y){
    console.log(x*y)
}
// 1. By bind()
let multiplyByTwo = multiply.bind(this,2)  // 2 refers to x
multiplyByTwo(5)  // o/p = 10                 5 refers to y
// ---------  OR  ---------------------
// let multiplyByTwo = function(y){
//     const x = 2
//     console.log(x*y)
// }
// multiplyByTwo(3)

let multiplyByThree = multiply.bind(this,3)
multiplyByThree(5)  // o/p = 15

let multiplyByThree1 = multiply.bind(this,3,10)  // 3 -> x, 10 -> y
multiplyByThree1(5)  // o/p = 30                    5 is ignored

let multiplyByThree2 = multiply.bind(this)
multiplyByThree2(3,5)  //  o/p = 15

//2. By Closures

let addition = function(x) {
    return function(y){
        console.log(x+y)
    }
}

let additionByTwo = addition(2)      // 2 refers to x
additionByTwo(10)  // o/p = 12          10 refers to y

let additionByThree  = addition(3)
additionByThree(15)  //  o/p = 18 