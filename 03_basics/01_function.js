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



