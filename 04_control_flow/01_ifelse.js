
// const score = 97

// if(score >= 95){
//     let student = "congratulations"
//     console.log(`your grade is A+ ${student}`);
// }else if(score >= 50){
//   console.log("you are passed");
  
// }else{
//   console.log("fail");
// }

// const balance = 999;
// //if(balance>800) console.log("above eight hundred"); // implest scope

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 700){
//   console.log("less than 700");
    
// }else if (balance < 1000 && balance > 700){
//   console.log("between 800 to 999");
  
// } else if(balance === 1000){
//   console.log("equal to thousand");
  
// } else {
//   console.log("more than score ");
  
// }


// const userLoggedIn = true;
// const debitCard = true;
// if (userLoggedIn && debitCard) {
//   console.log("you are logged in and allow to buy");
  
// } else {
//   console.log("error");
  
// }

const loggedInFromGoogle = false;
const loggedInFromFacebook = false;
const loggedInFromEmail = true;

//if (loggedInFromGoogle && loggedInFromFacebook && loggedInFromEmail) { // outer if is for checking weather condition is true or not
  if (!loggedInFromGoogle) {
    console.log(" can't login from google ");
  } else if (loggedInFromFacebook){
    console.log("you are logged in from facebook");
  } else if (loggedInFromEmail){
    console.log("you are logged in from email");
    
  } else{
    console.log("error");
    
  }
  
//}
