
//  filter 

const myArray1 = [1,2,3,4,5,6,7,8,9,10]
//  const result = myArray1.filter((num)=> num>4)
//  .map( (num)=> num+2)
// console.log(result);


const result = myArray1.filter( (num)=>{
  return num>5
} )
.map((num)=>{
  return num+2
})
console.log(result);


const books = [
  {tittle: "book one", genre: "Fiction", publish : 1898,"edition":2002},
  {tittle: "book two", genre: "Non-Fiction", publish : 1992,"edition":2006},
  {tittle: "book three", genre: "History", publish : 1993,"edition":2008},
  {tittle: "book four", genre: "Non-Fiction", publish : 1990,"edition":2010},
  {tittle: "book five", genre: "science", publish : 2000,"edition":2012},
  {tittle: "book six", genre: "Fiction", publish : 2005,"edition":2014},
  {tittle: "book seven", genre: "history", publish : 2010,"edition":2016},
  {tittle: "book eight", genre: "history", publish : 2020,"edition":2024}
]


// const userBooks = books.filter( (bk)=>{
//   return bk.edition >= 2012
// } )

const userBooks = books.filter( (bk)=>{
    return bk.genre === "history" && bk.edition >=2010
} )
console.log(userBooks);
