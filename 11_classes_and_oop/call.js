// When simulating class inheritance in JavaScript before class syntax.

function setUsername (username){
  this.username = username
}


// Constructor function to create a user with username, email, and password
function createUser (username , email , password){
  setUsername.call(this,username)  // Using call to set the username
  this.email = email;
  this.password = password;
}

// Creating a new user object using the createUser constructor
const hello = new createUser("ali", "ali@fb.com","@2243")
console.log(hello);








function greet(message){
  console.log(`${message}  ${this.name}`);
  
}
const person = {name : "MUHAMMAD"}
greet.call(person,"As salam Walikum")





const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

function sayHello() {
    console.log(`Hello, ${this.name}`);
}

sayHello.call(person1); // "Hello, Alice"
sayHello.call(person2); // "Hello, Bob"

/* 
call invokes a function with a specified this context and individual arguments.
It allows a function to be executed in the context of a specific object, but it does not establish inheritance or permanently link the functions.



The call method in JavaScript is a way to borrow a function from one object and temporarily use it with another object. It allows you to control what this refers to when calling a function.

How call Works:
Function Borrowing: You have a function that works for one object, but you want to use it for another object without copying the function.
Set this Manually: call lets you set this to a specific object when you call the function.
Immediate Execution: The function runs immediately when you use call.

*/