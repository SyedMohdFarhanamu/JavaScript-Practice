// 1st way to call()
let name = {
    firstname:"Syed",
    lastname: "Farhan",

    printFullName: function(){
        console.log(this.firstname + " " + this.lastname)
    }
}
name.printFullName()  // Syed Farhan
let name2 = {
    firstname:"Syed",
    lastname:"Shahdab"
}
// function borrowing
// I want to use "printFullName()" from name Object to name2 Object so we use "call()" that is called function borrowing.
// we can borrow data of other object and used in data of another object.

name.printFullName.call(name2)  // Syed Shahdab

// 2nd way to call()

// if a method is reused again and again then we write seperatly


let user1 = {
    firstname:"Razi",
    lastname: "uddin"
}

let printFullName= function(){
    console.log(this.firstname + " " + this.lastname)
}

printFullName.call(user1)  // Razi uddin


let user2 = {
    firstname:"Tufail",
    lastname:"Ahmad"
}
printFullName.call(user2)  // Tufail Ahmad

// 3rd way
// if we passes more parameters 
let user3 = {
    firstname:"Razi",
    lastname: "uddin"
}

let printFullNameOfUser= function(hometown, state){
    console.log(this.firstname + " " + this.lastname + " from " + hometown + "," +state)
}

printFullNameOfUser.call(user1, "Dehradun","Uttrakhund") // Razi uddin from Dehradun,Uttrakhund


let user4 = {
    firstname:"Tufail",
    lastname:"Ahmad"
}
printFullNameOfUser.call(user2, "Lucknow", "Uttar Pradesh") // Tufail Ahmad from Lucknow,Uttar Pradesh

// ------------------------------------------------------------------------------------------------------------

// apply()
// only difference b/w apply() and call() is :-
// way of pass arguments in "apply()" that "1st argu is reference of object and 2nd argu is list of passing argu in function" but in "call()" 1st argu is reference of object and 2nd pass argu individually. 
printFullNameOfUser.apply(user2, ["Lucknow", "Uttar Pradesh"]) // Tufail Ahmad from Lucknow,Uttar Pradesh

// bind()
let printMyName = printFullNameOfUser.bind(user1, "Dehradun","Uttrakhund")
printMyName() // Razi uddin from Dehradun,Uttrakhund





// call() :- used to invoke a function directly by passing with the reference of object and passing parameter
// apply() :- exactly same with "call()" but passing parameter in list form or arrayList
// bind() :- does not directly invoke function but gives you the copy of exactly same method which can invoke later.
