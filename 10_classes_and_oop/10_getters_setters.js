class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}hitesh`  // get the value is "abchitesh"
    }
    set password(value){
        this._password = value  // save in class is "abc"
    }
}
// use of getter and setter --> can not share the property of Object OR do customization on property of Object.
// both (get and set) are must be together to define any property.
// constructor and setter are set the value in class Object so that's why make new property in setter i.e._password otherwise error occured i.e. RangeError: Maximum call stack size exceeded.

// getter -->  get the value from outside the class && always return
// setter -->  set the value inside the class to save database && Can Not return

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);