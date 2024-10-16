let val = 0;
while (val<=10) {
  console.log(val);
   val = val +2;
}


let myArray = ["i phone","samaung","vivo","infinix"]

let arr = 0;
while(arr<myArray.length){
  console.log(`${myArray[arr]}`);
  arr++; 
}


// do while 

let balance = 100;
do {
  console.log(`your score is ${balance}`);
  balance--;
  
} while (balance>80);


let products = ["watches","laptops","mobiles","power bank"]
let index = 0;
do {
    console.log(` ${products[index]}`);
    index++;
    
} while (index<products.length);



for(let i = 1; i<=10; i++){
  console.log(`${i} x ${i} = ${i*i}`);
  
}