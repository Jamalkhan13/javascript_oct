function addNumbers(num1,num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1+num2
  }else{
    return 'Both arguments must be numbers'
    
  }
} 
const result = addNumbers(10,"a")
console.log(result);


function loginUserMessage(username){
  if (!username ) {
    return "please enter your username"
  }else{
    return `welcome ${username} you are just logged in`
  }
}
console.log(loginUserMessage());

  function prices(...number){
    return number
  }
  console.log(prices(1,2,3,4,5));
                                      
                                           // ... rest operator collect all remaining elements into array 
                                            //The rest operator ... gathers multiple elements into a single array or object.
                                            //It is the opposite of the spread operator, which is used to unpack elements from an array or object.


                                            
   function calculateCartPrice(...number){
     return number.reduce((sum,current) => sum + current,0)
     }
 console.log(calculateCartPrice(1,2,3,4,87,23,67));


const num = [1,2,3,4,5]
 const total = num.reduce((sum,current) => sum+current,0)
 console.log(total);


 const num2 = [11,21,32,34]
 const total2 = num2.reduce((prev,current) => prev + current,0)

console.log("sum of sll elements is ",total2);


const user = {
  name : "javascript",
  price: 1299
}

function handleObject(anyobject) {
  if (anyobject.hasOwnProperty('name') && anyobject.hasOwnProperty('price')) {
       return `"coursename is ${anyobject.name} and price is ${anyobject.price}"`
  }else {
    return "object not found"
  }
  
}

console.log(handleObject(user));


 myArray = [10,20,30,40,50]

 function handleArray (getArray){
    return getArray[1]
 }
 console.log(handleArray(myArray));
 

