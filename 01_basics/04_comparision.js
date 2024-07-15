// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// These types of code must be avoided
1.

// console.log("2" > 1);  // string convert into number
// console.log("02" > 1);

2.

// COMPARISION (>,<,>=,<=) & EQUALITY CHECK (==) work differently
// comparision convert to null to a number and treating it as 0
// that's why (3) null>=0 is true and null>0 is false
// console.log(null > 0);  // false
// console.log(null == 0);  // false
// console.log(null >= 0);  // true

3.

// console.log(undefined == 0); //  false
// console.log(undefined > 0);  //  false
// console.log(undefined < 0);  //  false

// ===  Strictly check also data types
console.log("2" === 2);  // false
console.log("2" == 2);  //  true