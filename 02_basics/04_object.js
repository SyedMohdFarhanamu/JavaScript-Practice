// const tinderuser = new Object()  // Singleton Object
const tinderuser = {}  // Non Singleton Object
// console.log(tinderuser);  //  empty object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isLoggedIn = false

// console.log(tinderuser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);  // hitesh

//  COMBINED TWO OR MORE OBJECTS

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}


// const obj3 = { obj1, obj2 }
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign(obj1,obj2) // .assign(target,source...) target object is also changed.
// console.log(obj3);//  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);//  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1 === obj3);  //true

// So we want do not change in obj1 so we used empty {}
// const obj3 = Object.assign({} , obj1, obj2)
// console.log(obj3);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);  //  { '1': 'a', '2': 'b' }
// console.log(obj1 === obj3);  //  false


// MOSTLY USED SPREAD METHOD TO COMBINE TWO OR MORE OBJECT
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);  //  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj1);  //  { '1': 'a', '2': 'b' }

const ob1 = {1: "a", 2: "b"}
const ob2 = {2: "a", 4: "b"}
const ob3 = {...ob1, ...ob2}
// console.log(ob3); //  { '1': 'a', '2': 'a', '4': 'b' }

//  ACCESS KEYS AND VALUE FROM OBJECT IN ARRAYS FORM.

// console.log(tinderuser);  //  { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderuser));  //  [ 'id', 'name', 'isLoggedIn' ]  R/W IN ARRAYS FORM
// console.log(Object.values(tinderuser));  //  [ '123abc', 'Sammy', false ]  R/W IN ARRAYS FORM
// console.log(Object.entries(tinderuser));  //  [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//  TO CHECK KEYS ARE PRESENT OR NOT IN OBJECT
// console.log(tinderuser.hasOwnProperty('isLoggedIn'));  //  true
// console.log(tinderuser.hasOwnProperty('isLogged'));   //   false

// USE THIS SYNTAX
// FOR WHEN VALUES COMES FROM DATABASE IN THE FORM OF ARRAYS OF OBJECT

const users = [
    {
        id: 1,
        email: "h1@gmail.com"
    },
    {
        id: 2,
        email: "h2@gmail.com"
    },
    {
        id: 3,
        email: "h3@gmail.com"
    }

]

// console.log(users[0].email);  //  h1@gmail.com


// DESTRUCTURING OF OBJECT
//The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course
console.log(courseInstructor);  //  hitesh
// 2nd way to destructure in short name
const {courseInstructor : instructor} = course
console.log(instructor);  //  hitesh

//API (Application Programming Interface.)

// A Web API is a developer's dream.

// It can extend the functionality of the browser
// It can greatly simplify complex functions
// It can provide easy syntax to complex code

// The most common formats found in modern APIs are JSON (JavaScript Object Notation)
    //   JSON
    // Many APIs have adopted the newer JSON representation because it's built on the popular JavaScript programming language, which is ubiquitous on the web and usable on both the front- and back-end of a web app or service. JSON is a very simple format that is expressed using a combination of punctuation marks and real, readable words. Each object in JSON—set off between curly brackets ({})—contains two pieces, keys and values, each of which are contained within quotation marks ("") and separated by a colon (:). 



    // Keys represent an attribute about the object being described and specify one or more corresponding values. For example, if a pizza order is an object, its attributes (keys) would be crust type, toppings, and order status. The selections for these attributes/keys would be options (values) like thick crust, pepperoni, and out for delivery, respectively.



    // Let's see how this pizza order could look in JSON:

    // {
    //     "crust": "original",
    //     "toppings": ["chees", "pepperoni", "garlic"],
    //     "status": "cooking"
    // }

    // BOTH KEYS AND VALUE ARE IN STRING FORMAT EXCEPT NUMBER AND BOOLEAN.

    // In the JSON example above, the keys are the words on the left of the colons: toppings, crust, and status. They tell us what attributes the pizza order contains. The values are the parts to the right of the colons. These are the actual details of the order.


    //  The key terms we learned were:

        // JSON: JavaScript Object Notation
        // Object: A thing or noun (person, pizza order...)
        // Key: An attribute about an object (color, toppings...)
        // Value: The value of an attribute (blue, pepperoni...)

// SOME TIME API NOT LIKE OBJECT FORM THERE ARE ARRAY FORMAT'S API LIKE:-
//    [
//         {},
//         {},
//         {}
//    ]






