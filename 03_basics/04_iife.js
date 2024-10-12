
// Avoid global scope pollution: Variables declared inside an IIFE cannot be accessed outside the function, so it keeps the global scope clean.
// Create isolated scope: IIFEs are commonly used when you need to create a temporary scope to store data or execute code without affecting other parts of your program.

// Private variables: You can define variables or functions within an IIFE that remain private and hidden from the outside world.

(function hello(){
    // named iife
  console.log("DB connected");
  
})(); // semi colon is must after 1st iife function 

( (name) => {
  console.log(`DB Two connectedc ${name}`);
  
} ) ("jamal")