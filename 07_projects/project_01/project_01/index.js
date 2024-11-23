const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const textElement = document.querySelectorAll('.text')

buttons.forEach((button)=>{
  console.log(button);
  
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = "gray" // or e.target.id 

      textElement.forEach((txt)=>{
        txt.style.color = 'blue'
      })
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
      body.style.color = "black"

      textElement.forEach((txt)=>{
        txt.style.color = 'black'
      })
    }
    else if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
      body.style.color = "white"

      textElement.forEach((txt)=>{
        txt.style.color = 'yellow'
        txt.style.backgroundColor = "red"
      })
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
      body.style.color = ""

      textElement.forEach((txt)=>{
        txt.style.color = 'purple'
      })
    }else if (e.target.id === "purple"){
      body.style.backgroundColor = e.target.id

      textElement.forEach((txt)=>{
        txt.style.color = 'orange'
      })
    }
  })  
})