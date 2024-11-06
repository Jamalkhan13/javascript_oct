const myLi = document.querySelectorAll('li')
myLi.forEach((l)=>{
  l.style.backgroundColor = "yellow"
  l.style.color = "black"
  l.style.padding= "5px"
  l.style.borderRadius = "5px"
})

// getElementsByClassName returns an HTMLCollection, which is not directly iterable with .forEach(). Unlike NodeLists from querySelectorAll, HTMLCollections do not have the forEach method.

const myListItem = document.getElementsByClassName('list-item')
Array.from(myListItem).forEach((li)=>{   
  li.style.backgroundColor = "red "
})
