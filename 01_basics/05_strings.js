const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not recommend to use.

// Use Backticks for concatenate the strings.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(4, 8)
console.log(newString);

const anotherString = gameName.slice(-5, -2)
console.log(anotherString);

// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));  //change into ARRAYS