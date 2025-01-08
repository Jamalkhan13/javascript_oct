// let myName = "Jamal Khan"
// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
  thor : "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is ${this.spinderman}`);
    
  } 
}


Object.prototype.jamal = function(){
  console.log("Jamal is present in all Objects");
  
}

Array.prototype.heyJamal =  function(){
  console.log("Jamla says Hello");
  
}


// heroPower.jamal()
myHeros.jamal();
myHeros.heyJamal();
//heroPower.heyJamal();



//  inheritance

const user = {
  name: "hitesh",
  email: "hitesh@google.com"
}

const Teacher = {
  makeVideo : true
}

const TeachingSupport = {
  isAvaibale: false
}

const TASupport = {
  makeAssignment: `JS assignment`,
  fullTime: true,
  __proto__:TeachingSupport
}

Teacher.__proto__ = user



// modern syntex
Object.setPrototypeOf(TeachingSupport,Teacher)
Object.setPrototypeOf(Teacher,user)



let anotherUserName = "chaiAurCode     "
String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is ${this.trim().length}`);
  
  
}

anotherUserName.trueLength()
"jamal".trueLength()
"tea".trueLength()