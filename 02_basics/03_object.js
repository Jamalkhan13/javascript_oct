// singleton 
//Object.create()  // called through constructor method

// object literals

const mySymbol = Symbol("key1")
const myVal = " khan";

const JsUsers = {
  name : "jamal",
  "full name" : "jamal khan",
  mysym : Symbol("hello"),
  //age : 24,
  location: "rahimabad",
  email: "@gmail.com",
  [mySymbol] : "mykey1",
  [myVal] : "khan",
  isLoggedIn : false,
  lastLoginDays : ["monday","saturday"] 
}

// console.log(JsUsers.email);
// console.log(JsUsers["full name"]);

// console.log(JsUsers["email"]);
// console.log(JsUsers[mySymbol]);
// console.log(JsUsers[myVal]);
// console.log(typeof JsUsers.mysym);


// JsUsers.email = "jamalkhan@gmail.com"
// console.log(JsUsers);
// Object.freeze(JsUsers);
// JsUsers.email= "jamalkhan@microsoft.com"
// console.log(JsUsers);



JsUsers.greeting = function() {
  console.log("Hello JS users");
  
}
console.log(JsUsers.greeting());



JsUsers.greetingTwo = function() {
  console.log(`hello JS users , ${this["full name"]}`);
  
}
console.log(JsUsers.greetingTwo());



