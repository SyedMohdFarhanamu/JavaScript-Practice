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

console.log(tinderuser);  //  { id: '123abc', name: 'Sammy', isLoggedIn: false }

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

console.log(users[0].email);
  











