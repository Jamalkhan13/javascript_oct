
class user{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`USERNAME: ${this.username}`);
    
  }

   static createId(){
    return `123`
  }
}

const jamal = new user("jamal")
//console.log(jamal.createId());


class Teacher extends user {
  constructor(username,email){
    super(username);
    this.email = email;
  }
}

const iPhone = new Teacher("i Phone","i@phone.com")
iPhone.logMe()
//console.log(iPhone.createId());  will give error bcpz of

console.log(user.createId());






/*

Static methods are used when we need functionality that is relevant to the class as a whole and not specific to any particular instance. They are often used for utility or helper functions.


Real timeexample 

class Auth {
  static users = []; // Shared array of users

  static register(username, password) {
    Auth.users.push({ username, password }); // Shared users array
    console.log(`User ${username} registered.`);
  }

  static login(username, password) {
    const user = Auth.users.find(user => user.username === username && user.password === password);
    if (user) {
      console.log(`User ${username} logged in successfully.`);
    } else {
      console.log(`Login failed for user ${username}.`);
    }
  }

  static listUsers() {
    console.log("Registered Users:", Auth.users); // Shared users array
  }
}

// Using static methods
Auth.register("john_doe", "password123");
Auth.register("jane_doe", "securepassword");
Auth.login("john_doe", "password123");  // Successful login
Auth.login("jane_doe", "wrongpassword"); // Failed login
Auth.listUsers(); // Lists all registered users


*/