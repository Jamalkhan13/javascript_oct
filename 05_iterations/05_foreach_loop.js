const myArray = ["mobile","watches","laptops","cloths"]
myArray.forEach( function (item){
 // console.log(item)
  
})

const code = ["java","javascript","C++","OOP"]
code.forEach( (val)=>{
 // console.log(val);
  
} )

function printMe(item){
  console.log(item);
  
}
code.forEach(printMe)  // do not execute just give reference

code.forEach( (item,index,code) => {
  console.log(item,index,code);
  
})


const myCoding = [
  {
    languageName : "javascript",
    languageFile : "JS"
  },
  {
     languageName : "React.js",
    languageFile : "react"
  },
  {
     languageName : "python",
    languageFile : "py"
  }
]

myCoding.forEach( (item)=>{
  console.log(item.languageName,item.languageFile);
  
} )