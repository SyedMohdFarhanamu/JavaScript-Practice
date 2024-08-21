function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)// To call outer func with the help of "call method" and by "this" create own context
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);  // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }