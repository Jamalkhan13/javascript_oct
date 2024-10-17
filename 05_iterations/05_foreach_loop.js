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


const userInfo = [
  {
    userName: "ali",
    userPassword: 2341,
    location : "peshawar"
  },
  {
    userName : "Muhammad",
    userPassword: 98780,
    location: "islamabad"
  },
  {
    userName : "abubakar",
    userPassword: 23421,
    location : "lahore"
  },
  {
    userName: "qasim",
    userPassword: 65654,
    location: "karachi"
  }
]
 userInfo.forEach( (info,index)=>{
   console.log(info.userName,info.userPassword)
 } )

//  const result =[]
 
//  userInfo.forEach( (info)=>{
//   result.push(info.userName,info.userPassword)       
//  } ) 
//  console.log(result)


const myArr = [1,2,3,4,5,6,7,8,9,10]
const myNewArray = []
myArr.forEach( (index)=>{
  if (index>4) {
    myNewArray.push(index)
  }
  
} )
console.log(myNewArray);


