// const mobiles = ["i phone", "samsung","infinix","vivo"]
// const laptops = ["mac","hp","dell","lenovo"]

// mobiles.push(laptops)
// console.log(mobiles);
// console.log(mobiles[4][0]);


// const mobiles = ["i phone", "samsung","infinix","vivo"]
// const laptops = ["mac","hp","dell","lenovo"]
// const tabs = ["i phad" ,6,8,9,"samsung tab 6",1,2,3]
// //mobiles.shift()
// mobiles.unshift("i phone","hahaha")
// console.log(mobiles);


// const both = mobiles.concat(laptops,mobiles,tabs)
// console.log(both); 

//  const mobilesAndLaptops = [...mobiles,...laptops,...tabs]
//  console.log(mobilesAndLaptops);

//  const array = [1,2,3,4,5,[6,7,8,9,[10,11,12]],[13,14,15,16],[17,18,19,[20,21]]]
//  const newArray = array.flat(Infinity)// indepth can 1,2,3 and can be infinity
//  console.log(newArray);
 

//  console.log(Array.isArray("jamal khan"));
//  console.log(Array.from("jamal khan"));
//  console.log(Array.from({name : "jamal khan"})); // when it cannot convert to array it will return empty array[]

//  const obj = {
//   name:"jamal khan",
//   age:24,
//    uni: "uet"
//  }

//  const arr = Object.values(obj);
//  console.log(arr);
 

//  let score1 = 100;
//  let score2= 200;
//  let score3 = 300;

// let all = Array.of(score1,score2,score3)

// console.log(all);
// //console.log(Array.of(score1,score2,score3));
 
 
 
 

// const num =12345;
// const arr = Array.from(String(num),Number)
// console.log(arr);

// const obj ={
//   name: "jamal khan",
//   age : 24,
//   uni : "uet"
// }
// const array = Array.from(obj);
// console.log(array);




// const char = ("jamal","khan")
// console.log(Array.of(char));



let obj = {
  name : " jamal khan ",
  age : 24 ,
  university : " university of engineering and technology peshawar"
 }
// const array = Object.values(obj);
// const newArray = Object.keys(obj);
 const entries = Object.entries(obj)
// console.log(array);
// console.log(newArray);
console.log(entries);

