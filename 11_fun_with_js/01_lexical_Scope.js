function outer(){
    let username = "hitesh"
    // console.log("OUTER",secret)  // ReferenceError: secret is not defined
    function inner(){
        let secret = "12345"
        console.log("inner",username)
    }
    function innerTwo(){
        // console.log(secret)  //  ReferenceError: secret is not defined
        console.log("innerTwo",username)
    }
    inner()
    innerTwo()
}

outer()
// console.log("TOO OUTER", username)  //  ReferenceError: username is not defined