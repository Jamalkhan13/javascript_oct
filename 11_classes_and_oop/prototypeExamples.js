Object.prototype.greet = function(){
  console.log("Hello from object prototype ");
  
}

let obj = {}
obj.greet();


Array.prototype.sum = function(){
  return this.reduce((acc, val)=> acc + val,0)
}

let arr = [1,2,3]
console.log(arr.sum());


/*
Prototype is a mechanism by which JavaScript objects inherit properties and methods from other objects.
Object.prototype is the top-level prototype from which all objects derive methods like toString, valueOf, and custom methods like jamal.
Array.prototype is a prototype for arrays, which allows for custom array-specific methods like heyJamal.
*/
