// Loop for Object we used "For in" loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for (const key in myObject) {
//     console.log(key);
// }

// for (const key in myObject) {
    //  console.log(myObject[key]);
// }
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// "For in" loop for array
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); // 0 1 2 3 4      array keys are by default start from zero
    // console.log(programming[key]);  //  js rb py java cpp
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);    // Can not perform iteration via "for...in" to Map
}


// "for...in" (key) -> Array, String,Object
// "for...of" (values) -> Array , String, Map