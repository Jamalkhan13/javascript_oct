const textChange = document.querySelector("h1")
const stopButton = document.getElementById("stop")


const sayName = function(){
  console.log("jamal khan");
  
}

const text = function(){
  textChange.innerText = "Iam learning javascript from youtube"
}

 const changeMe = setTimeout(text,2000)

stopButton.addEventListener("click", ()=>{
  clearInterval(changeMe);
})


