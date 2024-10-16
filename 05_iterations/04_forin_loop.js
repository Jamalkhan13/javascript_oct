const myObject = {
    js : 'javascript',
    cpp : 'computer programming',
    DSA : 'data structure',
    OOP : 'object oriented programming'
}

for (const key in myObject) {
  console.log(`${key} is shortcut for ${myObject[key]}`);
}



