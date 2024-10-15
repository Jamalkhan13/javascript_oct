// nullish coalescing operator
// The nullish coalescing operator (??) is a logical operator in JavaScript that provides a way to return the right-hand operand when the left-hand operand is null or undefined.

// This is useful when you want to provide a fallback value for null or undefined, but don't want to falsely trigger on other values like 0, false, or an empty string.



let val1;

val1 = 5 ?? 10
val1 = null ?? 15
val1 = undefined ?? 20
console.log(val1);



let name = null
let defaultName = "guest"

let combine = name ?? defaultName
console.log(combine);

let anotherNAme = "";
let anotherDefaultName = " seond guest"
let anotherCombine = anotherNAme ?? anotherDefaultName
console.log(anotherCombine);

let isLoggedIn = false;
let user = "ali"
let output = isLoggedIn ?? user
console.log(output);


