const name = new String('jamalkhan')

// console.log(name[1]);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());

// console.log(name);

// console.log(name.charAt(5));
// console.log(name.charAt(6));
// console.log(name.indexOf('a'));
// console.log(name.indexOf('a'));


// const newString = name.substring(15,4)  // will swap if the start index is greater 
// console.log(newString);

// const anoterString = name.slice(-8,3)
// console.log(anoterString);


const arr = [1,2,3,4,5,"jamal",6,7,8,9]

const newArr = arr.slice(20,5)    // if the starting index is greater then it will return []array while substring swap indexes start with end 
console.log(newArr);

// const obj = {
//   name: "jamal",
//   age : 24,
//   city: "swat",
//   number : 556

// }
// const myObj = obj.slice(1,2)
// console.log(myObj);



const newString = "  jamal khan   "
console.log(newString);
console.log(newString.trim());  // trim will remove space from start and end.  

const url = "https://jamal.com/jamal%20khan"
console.log(url.replace('%20', '@7858'));


const hello = "cat is loyal than monkey and cat is also cute than monkey  monkey  "
console.log(hello.replaceAll('cat','dog'));



let text = "ali,ahmed,subhan"

let newText = text.replace(/(\w+)/g, function(match){      // /(\w+)/g is regular expression g is global flag
  return match.toUpperCase()
})

console.log(newText);


