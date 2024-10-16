const myObject = {
    js : 'javascript',
    cpp : 'computer programming',
    DSA : 'data structure',
    OOP : 'object oriented programming'
}

for (const key in myObject) {
  console.log(`${key} is shortcut for ${myObject[key]}`);
}

const obj = {
  greeting: "welcome",
  name : "mr john",
  profession : "developer",
  salary : "1234567",
  worarat : "software house"
}

for (const key in obj) {
  console.log(`${key}  ${obj[key]}`);
  
}



let count = 0;
for (const key in obj) {
    count++
  }
console.log(`number of properties ${count}`);


  

