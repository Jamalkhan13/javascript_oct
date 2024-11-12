function addLanguage (langName){
  const li =  document.createElement('li')
  li.innerHTML = `${langName}`
  document.querySelector('.language').
  appendChild(li)
}
addLanguage('react.js')
addLanguage('next.js')


// optmize method 

function addOptimizeLanguage (languageName) {
  const li = document.createElement('li')
  // instead of innerHTML will use createTextNode
  // const addText = document.createTextNode(languageName)
  // li.appendChild(addText)

  // we can code direct in one line instead of storing in variable and then append in child
  li.appendChild(document.createTextNode(languageName))
  document.querySelector('.language').appendChild(li)
}
addOptimizeLanguage('mySQL')
addOptimizeLanguage('mongoDB')

// Edit 
const secondLanguage = document.querySelector("li:nth-child(3)")
// secondLanguage.innerHTML = "Mojo" // not a good practise 
const newli = document.createElement('li')
newli.textContent = "rust"
secondLanguage.replaceWith(newli)


const editLanguage = document.querySelector("li:nth-child(2)")
const changeLanguage = document.createTextNode("python")
editLanguage.textContent = ""  // clear existing text 
editLanguage.appendChild(changeLanguage)


// edit 
const firstLanguage = document.querySelector("li:nth-child(1)")
const updatedli = document.createElement('li')
updatedli.textContent = "typescript";
firstLanguage.replaceWith(updatedli)

// edit 
const lastLanguage = document.querySelector("li:last-child")
lastLanguage.outerHTML = '<li>tailwind</li>'


// remove 
const lastLanguagee = document.querySelector("li:last-child")
lastLanguagee.remove()