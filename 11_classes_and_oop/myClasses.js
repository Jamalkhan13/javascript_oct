// ES6

class user {
  constructor(username,email,password){
    this.username = username;
    this.email= email;
    this.password= password;
  }
  encryptPassword(){
    return `${this.password}abc`
  }
  updateUser(){
    return `${this.username.toUpperCase()}`
  }
}

const person = new user("ali","ali@google.com","9987")
  console.log(person.encryptPassword());
  console.log(person.updateUser());
  

// Behind the scene

function user1(username,email,password){
  this.username = username;
  this.email = email;
  this.password = password;
}

user1.prototype.encryptPassword = function (){
  return `${this.password}`
}

user1.prototype.updateEmail = function (){
  return`${this.email.toUpperCase()}`
}

const person3 = new user1("uzair","uzair@fb.com","00000")
console.log(person3.encryptPassword());
console.log(person3.updateEmail());


