// Date 

//let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2001 , 1, 14)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toTimeString());


// let anotherDate = new Date(2001,1,14,1,30,0)
// console.log(anotherDate.toLocaleString());
// console.log(anotherDate.toDateString());

// //let myAnotherDate = new Date("2001-01-14")  // yy/mm/dd

// let myAnotherDate = new Date("1-14-2024")
// console.log(myAnotherDate.toLocaleString());

// const myDate = new Date("01-14-2001");
// let myStamp = Date.now();
// console.log(myStamp);             // milisecinds
// console.log(myDate.getTime());   // miliseconds

// console.log(Math.floor(Date.now()/1000)); // in seconds 

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getDay());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getFullYear());

newDate.toLocaleString("default",{
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour : "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false // use 24 hours
})

console.log(newDate);




 









