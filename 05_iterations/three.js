// The For Of Loop
    // The JavaScript for of statement loops through the values of an iterable object.

    // It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:
    // ["", "", ""]
    // [{}, {}, {}]

// "For of" loop for Array
const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);  // print value of array
    
}


const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}


// Map
    // The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

    // Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.

const map = new Map()
map.set("IN", "India")
map.set("USA", "United State Of America")
map.set("Fr", "France")

// console.log(map);

// 2nd for Uniqueness

const map1 = new Map()
map1.set("IN", "India")
map1.set("USA", "United State Of America")
map1.set("Fr", "France")
map1.set("IN", "India")
// console.log(map1);

// "for of" loop in Map data type

for (const key of map1) {
    console.log(key);
    
}


for (const [key, value] of map1) {     // array destructure
    // console.log(key,":-",value);
    
}


// "For of" loop can not used for Object data type
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);   //   TypeError: myObject is not iterable
    
}


//  loop for Object we used "For in" loop 