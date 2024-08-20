let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// a property/method present in Object then can easily accessable to finction/array/string
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()  //  hitesh is present in all objects
// myHeros.hitesh() //  hitesh is present in all objects
// myHeros.heyHitesh()  //  Hitesh says hello
// heroPower.heyHitesh()  //  TypeError: heroPower.heyHitesh is not a function



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  // TASupport can access all properties of TeachingSupport Object
}

Teacher.__proto__ = User  // Teacher can access all properties of User Object


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport can access all properties of Teacher Object


// find true length
let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()