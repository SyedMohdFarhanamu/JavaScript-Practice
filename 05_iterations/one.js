// for loop 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is the best number");
        
//     }
//     console.log(element);
    
// }
// console.log(element);  //  ReferenceError: element is not defined


for (let i = 0; i <= 10; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`Inner loop value ${j}, Outer loop ${i}`);
        // console.log(i + "*"+ j +"=" + i*j);
    }
    
    
}


let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}
// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log("Detected 5");
//         break  //  break the loop 
//     }
//     console.log(`value of i is ${index}`);
    
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log("Detected 5");
        continue  // skip one condition  & not out from the loop
    }
    console.log(`value of i is ${index}`);
    
    
}