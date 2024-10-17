const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNumbers = myNumbers.map((num)=>{
  return num+10
})
console.log(newNumbers);


const myAnotherNumbers = [10,20,30,40,50,60,70,80,90,100]
const myNewNum = myAnotherNumbers.map( (num)=>{
  return num+100
} ).map((num2)=>{
  return num2+10
})
.filter( (num3) => num3 > 150)
.filter((num4)=>{
  return num4>= 200
})
console.log(myNewNum);

