// Arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
// console.log(myArr);

// // Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)  // taking so much time. b/c shifting all element.
// // console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() //  by join, array are binded and convert into a string waith help of seperated comma.

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // 1 index is include && 3 index is exclude

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)  // 1 to 3 indexes are include
console.log("C ", myArr);
console.log(myn2);

// Major different is that
// by slice, never affected on original array
// by splice, some parts are exclude from original array so manipulte original array