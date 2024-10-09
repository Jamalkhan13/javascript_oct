const course = {
  courseName : "javascript",
  price : 999,
  courseInstructor : "hitesh Choudary"
}

const {courseInstructor} = course  // destructure of objects
const {courseInstructor : instructer} = course // courseInstructor:instructer apni asani k liya we can do like this 
console.log(courseInstructor);
const {price} = course
const {price : coursePrice} = course
console.log(price);
console.log(coursePrice);

