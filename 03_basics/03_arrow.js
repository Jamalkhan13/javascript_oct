const user = {
  username : "jamal",
  price: 999,
  welcomeMessage:function () {
    console.log(`${this.username}, and price is ${this.price}`);
   // console.log(this);
    
  }
}

// user.welcomeMessage()
// user.username = "sam";
// user.welcomeMessage()

console.log(this);

// const addTwo=  (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(5,6))

const addTwo = (num1,num2) => num1 + num2
const addThree = (num1,num2,nym3) => (num1 + num2)
console.log(addTwo(5,5));
console.log(addThree(5,5,5));


// return object in implist 
const objValue = ()=> ({name:"Jamal khan"})
console.log(objValue());
  