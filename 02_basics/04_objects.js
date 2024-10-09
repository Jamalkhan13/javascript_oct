// // const tinderUser = new Object()   // singleton 

const tinder = {}
tinder.name = "jhon";
tinder.id = "1232fvc";
tinder.isLoggedIn = false ;
console.log(tinder);


// const regularUser = {
//   email: "hello@gmail.com",
//   fullName : {
//     userFullName : {
//       firstName : "jamal ",
//       lastName : "Khan"
//     }
//   }
// }
// console.log(regularUser.fullName.userFullName.firstName);


// const obj1 = {

//   1: "one A",
//   2: " Two B"
// }

// const obj2 = {
//   3 : "Three C",
//   D : "Four D"
// }

// //const obj3 = {obj1,obj2}
// //console.log(obj3);
// //const obj3 = Object.assign({},obj1,obj2)
// const obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
 {
    id: "121a",
    email: "jamal@123.com"
  },
  {
    id: "123b",
    email: "khan@121.com"
  },
  {
    id: "125c",
    email: "hello@124.com"
  },
]

console.log(users[1].id);
const allUsers = {...users} //

//const allUsers = Object.assign({},users)
//const allUsers = {...users[0],...users[1],...users[2]} // it will return only index 2 because of overwrite
console.log(allUsers);


console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder)); // it will give every key and values in seprate array

console.log(tinder.hasOwnProperty('isLoggedIn'));
console.log(tinder.hasOwnProperty('fullname'));




