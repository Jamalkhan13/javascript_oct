const userEmail = "jamal@gmail.com"
if (userEmail) {
  console.log(`your email is ${userEmail}`);
}else {
  console.log("Dont have user email");
  
}

// falsy values 
//  false , 0 , -0 ,Bigint 0n, "" , null , undefined , Nan
// truthy =  "0" , "false" , " " , [] , {} , finction(){}.

const user = []
if (user.length===0) {
  console.log("empty array");
  
}

const userObj = {}
if (Object.keys(userObj).length===0) {
  console.log("obj is empty");
  
}

const equalTo100 = function(num1,num2){
    if(num1 === 100){
      return true
    } else if (num2===100) {
      return true
    }else if(num1 + num2 === 100){
      return true
    } else{
      return false
    }
}

//const result = equalTo100();
console.log(equalTo100(100,20));
console.log(equalTo100(50,10));

const equalTo50 = (val1,val2) => val1 === 50 || val2 === 50 || val1 + val2 === 100;
console.log(equalTo50(50,0));
console.log(equalTo50(10,20));
