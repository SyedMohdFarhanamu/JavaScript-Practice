let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());   // Month start from 0 in JS

// let myCreatedDate = new Date(2023, 0, 23, 5,3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-25")
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); // no of ms from 1 JAN 1970
console.log(myCreatedDate.getTime());  // no of ms from 1 JAN 1970
console.log(Math.floor(Date.now()/1000)); // converted into seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getHours());

// to change the time zone
// newDate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
console.log(newDate.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));


