class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)  //  The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()  // USERNAME is chai
const masalaChai = new User("masalaChai")

masalaChai.logMe()  //  USERNAME is masalaChai

console.log(chai instanceof User);  // true