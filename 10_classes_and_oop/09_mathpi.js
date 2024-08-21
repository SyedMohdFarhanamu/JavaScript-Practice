// can you change the value of PI ???
// if NO then Why can not do ???
// console.log(Math.PI);  // 3.141592653589793
// Math.PI = 5
// console.log(Math.PI);  // 3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// getOwnPropertyDescriptor --> to give hidden things of OBJECT

// console.log(descripter);    // {value: 3.141592653589793,writable: false,enumerable: false,configurable: false}
// due to "writable: false" can not change PI value
// due to "enumerable: false" can not iterate in loop

// -------------------------------------------------------------------------------------------------------------

// We can also make own property to OBJECT

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {value: 'ginger chai',writable: true,enumerable: true,configurable: true}

// Do change the Object property
// Object.defineProperty(chai , "name", {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// {value: 'ginger chai',writable: flase,enumerable: false,configurable: true}

// --------------------------------------------------------------------------------------------------------
// Check iteratable
for (let [key,value] of Object.entries(chai)) {     // with the help of "entries" can iterate An OBJECT.
    if (typeof value !== 'function') {   // want to only KEY And VALUE of AN OBJECT.
        // console.log(`${key} : ${value}`);  // name : ginger chai price : 250 isAvailable : true

    }
    
    
}
//-------------------------------------------------------------------------------------------------------

// I wanted do that can not ieterate property
Object.defineProperty(chai , "name", {
    // writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {     // with the help of "entries" can iterate An OBJECT.
    if (typeof value !== 'function') {   // want to only KEY And VALUE of AN OBJECT.
        console.log(`${key} : ${value}`);   // price : 250 isAvailable : true

    }    
}
// by this rule we can left any one property of object in LOOP. 