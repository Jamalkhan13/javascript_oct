
// for (let i = 0; i<=10; i++) {
//     for (let j = 0; j < 20; j++) {
     
//       console.log(`inner loop value is : ${j}`);
      
//     }
//   console.log(`outer  loop value is ${i}`);
  
  
// }


//  table 

for (let i = 2; i <= 2; i++) {
  for (let j = 0; j<=10; j++) {
   console.log(`${i} * ${j} = ${i*j}`);  
  }
}

// for loop on array 

let myArray = ["Html","css","Javascript","Tailwind","React.js"]
console.log(myArray.length);

for(index = 0; index< myArray.length; index++){
  console.log(myArray[index]);
  
}

// break in for loop

for (let index = 1; index <= 15; index++) {
  const element = index;
  if (index === 5) {
    console.log("5 detected");
    break  ; 
  }
  console.log(element); 
}


// continue in for loop

for(let i =1 ; i<=15 ; i++){
  if (i === 5) {
    //console.log("5 detected");
    continue;  // will ignore || skip 5 
  }
  console.log(i)
  
  
}


