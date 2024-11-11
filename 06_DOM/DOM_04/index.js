function addLanguage (langName){
  const li =  document.createElement('li')
  li.innerHTML = `${langName}`
  document.querySelector('.language').
  appendChild(li)
}
addLanguage('react.js')
addLanguage('next.js')


// optimise method 

function addOptimiseLanguage (languageName) {
  const li = document.createElement('li')
  // instead of innerHTML will use createTextNode
  // const addText = document.createTextNode(languageName)
  // li.appendChild(addText)

  // we can code direct in one line instead of storing in variable and then append in child
  li.appendChild(document.createTextNode(languageName))
  document.querySelector('.language').appendChild(li)
}
addOptimiseLanguage('mySQL')
addOptimiseLanguage('mongoDB')

// Edit 
const secondLanguage = document.querySelector("li:nth-child(1)")
// secondLanguage.innerHTML = "Mojo" // not a good practise 
const newli = document.createElement('li')
newli.textContent = "rust"
secondLanguage.replaceWith(newli)