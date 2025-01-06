// object literal

const user = {
  userName : "Jamal Khan",
  loginCount: 10,
  signedIn: true,

  getUserDetails: function(){
    // console.log("got user details from database");
    // console.log(`userName : ${this.userName}`);
    console.log(this);
    
  }
}

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);

// constructor function

function User(userName, loginCount, isLoggedIn){
  this.userName = userName;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting =  function(){
    console.log(`welcome ${this.userName}`);
    
  }

  return this;
  
  // This explicitly returns the object that was created. However, this is unnecessary because JavaScript automatically returns this when a function is invoked with new if no other object is returned.
}

const userOne = new  User("Jamal khan", 10 , true)
const userTwo =  new User("MUHAMMAD", 100,false)
console.log(userOne.constructor); // constructor properity is a reference of constructor function   outcome = [Function : User]
console.log(userOne);
console.log(userTwo);

// new keyword: The new keyword is used to create a new instance of an object that has a constructor function (User in this case). Here's how it works:

// Creates a new object: A new empty object is created.

// Sets the prototype: The new object's prototype is set to the prototype of the constructor function. In this case, userOne.__proto__ will be equal to User.prototype.

// Binds this: The this keyword inside the User function is bound to the new object.

// Executes the constructor: The User function is called with the provided arguments, and this refers to the newly created object.

// Returns the object: The new object is returned, unless the constructor function explicitly returns a different object.


// Summary of the new keyword:
// Creates a new object.
// Sets the prototype of the new object.
// Binds this to the new object.
// Executes the constructor function with the provided arguments.
// Returns the new object, unless another object is explicitly returned.
