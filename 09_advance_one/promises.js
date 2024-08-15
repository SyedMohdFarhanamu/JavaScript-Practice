// Promise
// 1st.a
const promiseOne = new Promise(function(resolve , reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },5000)

})
promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

// 'resolve' is directly connected to '.then' 
// 1st.b
new Promise(function(resolve , reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)

}).then(function(){
    console.log("Async 2 is resolved");
    
})


// 2nd
// if the data comes from Network then passed in resolve() in the form of object{},array[],function()
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({
            username:"chai", email:"chai@example.com"
        })
    },1000)
}) 
promiseThree.then(function(user){
    console.log(user);
    
})

// 3rd.a
// if there are error occured.
// QUESTION:- want to username from object.
// EXAMPLE:- mainlu used in Database Connection 
// these is called CHAINING b/c multiple "then" are called 
// return value of 1st "then" goes into 2nd "then" 
// if error is here then used "catch"/
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"hitesh", password:"123"})
        } else{
            console.log('Error: Something went wrong');
            
        }
        
    },1000)
})
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})


// 3rd.b
// write same program as above but with help of "async await"
// "async" makes a function return a Promise
// "await" makes a function wait for a Promise

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"javascript", password:"123"})
        } else{
            reject('Error: JS went wrong');
            
        }
        
    },1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()


// 4th.a
// JSON response

async function getAllUsername() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  // n/w response timetaken so use "await"
        const data = await response.json()   // take time to give data so use "await" here
        console.log(data);
        
    } catch (error) {
        console.log("E:", error);
        
    }
}
getAllUsername()


// 4th.b
// JSON response
// same things doing with "then & catch"
fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
    
})