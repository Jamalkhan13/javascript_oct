
//  filter 

const myArray1 = [1,2,3,4,5,6,7,8,9,10]

//  const result = myArray1.filter((num)=> num>4)
//  .map( (num)=> num+2)
 
// console.log(result);

const result = myArray1.filter( (num)=>{
  return num>5
} )
.map((num)=>{
  return num+2
})

console.log(result);