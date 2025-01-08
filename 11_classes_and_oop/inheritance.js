

class user {
  constructor(username){
    this.username = username;
  }
  logMe(){
    console.log(`USERNAME IS ${this.username}`);
     
  }
}

class Teacher extends user{
  constructor(username,email,password){
    super(username)
    this.email = email;
    this.password = password
  }
    addCourse(){
      console.log(`A new course was added by ${this.username}`);
      
    }
}
const hello = new Teacher("jamal","jamal@microsoft.com","112233")
hello.logMe()


const masalaChai = new user("masalaChai")

masalaChai.logMe()

// masalaChai.addCourse(); //  This will throw an error: masalaChai.addCourse is not a function 
// addCourse method is defined in the Teacher class, but masalaChai is an instance of the user class, which does not have the addCourse method.

console.log(hello === masalaChai);
console.log(hello === Teacher);

console.log(hello instanceof Teacher);
console.log(hello instanceof user);



