const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

let intervalId;
const sayDate = function(str){
  console.log(str,Date.now());
  
}

 //const intervalId = setInterval(sayDate,1000, "hi");
 

 startButton.addEventListener("click",()=>{
  if(!intervalId){
  intervalId = setInterval(sayDate,1000,"hi");
  }
 })

 stopButton.addEventListener("click" ,()=>{
  if(intervalId){
  clearInterval(intervalId);
  intervalId = null;
  }
 })