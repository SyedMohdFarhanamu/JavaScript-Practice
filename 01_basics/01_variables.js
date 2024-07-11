const accountId = 142536
let accountEmail = "syed681@gmail.com"
var accountPassword = "123456"
accountCity = "Lucknow" // not used
let accountState; //; can used or not

//accountId = 789  // Not Allowed

accountEmail = "farhan681@gmail.com"
accountPassword = "741852963000"
accountCity = "Gorakhpur"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])