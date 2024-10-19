const myNums = [1,2,3,4]

const myTotal = myNums.reduce( (accumulator , currentValue) => {
  console.log(`accumulator value is ${accumulator} and current value is ${currentValue}`);
  
  return accumulator+currentValue
},0)
console.log(myTotal);

 const arrays = [[1,2],[3,4],[5,6],[7,8],[9,10]]

const myArrays = arrays.reduce((accum, currval)=>{
  return accum.concat(currval)
},[])

console.log(myArrays);


const fruits = ["apple","banana","apple","orange","banana","apple","graphes",1,1,1,1]
const count = fruits.reduce( (acc,fruit)=>{
    acc[fruit] = (acc[fruit]  || 0)+1
    return acc;
},{})
console.log(count);



 occurencies and sumx 

const cart =[1,1,1,1,2,2,2,3,4,5,6,7,8,9]
const addToCart = cart.reduce(  (accum,currVal) =>{

    // count occurences
     accum.count[currVal] = (accum.count[currVal] || 0) + 1

     accum.sum += currVal
     return accum 
},{count : {},sum:0})
console.log(addToCart);


// const cart =[1,1,1,1,2,2,2,3,4,5,6,7,8,9]
// const addToCart = cart.reduce(  (accum,currVal) =>{

//     // count occurences
//      accum[currVal] = (accum[currVal] || 0) + 1

//      accum.sum += currVal
//      return accum 
// }, {sum:0})
// console.log(addToCart);
