// // for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
  if (num === 3) {
      continue;
  }
  console.log(num);
}

// const greetings = "hello world!"
// for (const greet of greetings) {
//   if (greet == " ") {
//     continue;
//   }else if (greet == "d") {
//     break;
//   }
//   console.log(greet);
  
// }

const map = new Map()
map.set('pak' , "pakistan")
//map.set("usa", "united state of america")
map.set("in" , "india")
map.set("numb",98765)
map.set("pak" , "pakistan")


//console.log(map.get('pak'));
console.log(map.has('usa'));
// console.log(map.has('job'));
//console.log(map.delete('in'));
console.log(map);

for (const [key,value] of map) {  // destructure
 // console.log(key);  // will print in array
    console.log(key,value);
    
}


const coding = new Map()
coding.set('language','javascript');
coding.set('salary',20000);
coding.set('threeyearexperience',true)
coding.set(1122,555)
coding.set(1,"one")
console.log(coding);

for (const [coder,value] of coding) {
  console.log(coder,value);
  
}


const sum = new Map()
sum.set("this is function in map",(num1,num2)=>{
  return num1+num2
});
const newValue = sum.get("this is function in map")(2,6);
console.log(newValue);



const greeting = new Map()
greeting.set('name','john')
greeting.set('welcome','to university')
greeting.set('salary',20000)
greeting.set('position','developer')
greeting.set("loop in map", ()=>{
    let result = ""
    for(let i=1; i<=5; i++){
      result += `${i}`
    }
    return result
})
const output= greeting.get('loop in map')();
console.log(output);

//console.log(greeting);
