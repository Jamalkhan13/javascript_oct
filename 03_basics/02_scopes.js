
function one(p) {
  const usernsme = "ali"
    function two (){
      const email = "sli@gmail.com"
      console.log(email);
      console.log(usernsme);
    }
   // console.log(email);
    two()
    
}
one()


if(true){
    const username = "jamal"
    if(username=== "jamal"){
      const lastname = " khan"
      console.log(username.concat(lastname));
      
    }
   // console.log(lastname);
    
}

//console.log(username);

console.log(one(5)); // in hoisting we can call function before declartion 

function one (num){
  return num + 1;  
}


console.log(two(3));  // but we cannot call when we store function in a variable 

const myFunction = function two(num) {
  return num + 2;
}

