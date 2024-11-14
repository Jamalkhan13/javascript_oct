const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
  console.log(button);
  
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = "gray" // or e.target.id 
    }
    else if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
      body.style.color = "black"
    }
    else if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id
      body.style.color = "white"
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
      body.style.color = ""
    }else if (e.target.id === "purple"){
      body.style.backgroundColor = e.target.id
    }
  })  
})