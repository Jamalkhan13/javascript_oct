const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

 Object.defineProperty(descripter,"PI",{
  value : 4.14,
  writable: true
})
console.log(Object.getOwnPropertyDescriptor(descripter,"PI"));





const myMath = {}

Object.defineProperty(myMath,'PI',{
  value: 4,
  writable: true,
  enumerable: false,
  configurable:false
})

console.log(Object.getOwnPropertyDescriptor(myMath,"PI"));



let radius = 5;
let result = radius * myMath.PI;
console.log(result);






const chai =  {
  name: 'ginger chai',
  price: 250,
  isAvailable:true,

  orderChai: function(){
    console.log("chai nhi bni");
    
  }
}
console.log(chai);

Object.defineProperty(chai,'name',{
  writable:false,
  enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

 for (const [key,value] of Object.entries(chai)) {
  if(typeof value !== 'function'){
    console.log(`${key} ${value}`);
  } 
  
}






myMath = {
  pi: Math.PI
}

Object.defineProperty(myMath,"pi",{
  value: 4.14,
  writable:false,
  enumerable:false,
  configurable:false
})
console.log(Object.getOwnPropertyDescriptor(myMath,"pi"));

console.log(myMath.pi*2);
