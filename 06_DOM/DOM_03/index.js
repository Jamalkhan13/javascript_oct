const div = document.createElement('div')
console.log(div);
div.className = "main"
div.id= Math.floor(Math.random() * 16 + 1)
div.setAttribute('title','genereated title')
div.style.backgroundColor = 'green'
div.style.padding = '12px'
//div.innerText = "Jamal Khan"
const addText = document.createTextNode('Jamal Khan')
div.appendChild(addText)

document.body.appendChild(div)