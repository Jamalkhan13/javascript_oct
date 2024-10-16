// // for of loop

const arr = [1,2,3,4,5]
for (const num of arr) {
  if (num === 3) {
      continue;
  }
  console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
  if (greet == " ") {
    continue;
  }else if (greet == "d") {
    break;
  }
  console.log(greet);
  
}

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