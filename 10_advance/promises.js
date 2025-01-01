const promiseOne = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task is complete");
    resolve()
    
  },1000)
})

promiseOne.then(function(){
  console.log("promiseone is consumed");
  
})


new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log("Async task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("then resolved");
  
})


const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({userName : "jamalkhan", userEmail: "jamal@yahoo.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user.userEmail);
  
})


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({user:"Jamal", password: "1123"})
    }
    else{
      reject("something went wrong")
    }
  },1000)
})

promiseFour.then(function(user){
  console.log(user);
  return user.password
})
.then((data)=>{
  console.log(data);
  
})
.catch(function(error){
  console.log(error);
  
}).finally(()=>{
  console.log("The promise is either resolved or rejected");
  
})




const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    if(!error){
    resolve({courseName : "javascript", price : 10000})
    }else{
      reject(" error : JS WENT WRONG ")
    }
  },1000)
})

async function promiseFiveConsumed() {
  try {
    const responce = await promiseFive;
    console.log(responce.price);
    
  } catch (error) {
    console.log(error);
    
  }
}

promiseFiveConsumed();

