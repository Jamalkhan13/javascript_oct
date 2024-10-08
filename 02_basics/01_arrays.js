// Arrays

// let myArr = [1,2,3,4,5,"jamal"]
// console.log(myArr);
// console.log(myArr[4],myArr[5]);

// const myArrTwo = new Array("jamal khan",1,2,3,4,5,6)
// console.log(myArrTwo[3],myArrTwo[5]);


// Arrays methods

// myArr = [1,2,3,4,"jamal khan"]
// myArr.push("ali",5,6);
// myArr.pop(); // will remove last value of array 
// myArr.unshift(9); // will add element in start of array
// myArr.shift();    // it will remove element from start if array 
// console.log(myArr);
// console.log(myArr.includes(8));
// console.log(myArr.indexOf("jamal khan"));
// console.log(myArr.indexOf(99)); // when value is not in array then it will return -1
// console.log()


// const newArr = [1,2,3,4,5]
// const myArray = newArr.join()
// console.log(newArr);
// console.log(myArray);


/// slice and splice 

const myArr = [1,2,3,4,5]
console.log(" original array ",myArr);

myNewArrayOne = myArr.slice(1,4)
console.log("slice value ", myNewArrayOne);

console.log(" orignal value after slice",myArr);

const myNewArrayTwo = myArr.splice(1,3)
console.log("spliced value ",myNewArrayTwo);
console.log("orginal array after spliced" , myArr);













