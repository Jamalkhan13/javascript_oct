const score = 200;  // will return undefined datatype 
console.log(score);

const balance = new Number (50000.89765);   // and it will number 
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));

const number = 234.8769
console.log(number.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-PK'));



//+++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++


console.log(Math);

const num = new Number(-5,-10);
console.log(Math.abs(num));

let a = -34 , b = 3;

console.log(Math.abs(a+b));
console.log(Math.round(3.6));
console.log(Math.ceil(4.3));
console.log(Math.ceil(3.1));
console.log(Math.floor(2.4));
console.log(Math.pow(2,8));
console.log(Math.pow(3,3));
console.log(Math.floor(Math.random()*10))

let colors= ["red","green","blue","purple","yellow"]

let randomColors = colors[Math.floor(Math.random()*colors.length)]
console.log(randomColors);


let num1 = [1,2,3,4,5,6,7,8]

let randomNumber = num1[Math.floor(Math.random()*num1.length)]
console.log(randomNumber);



















