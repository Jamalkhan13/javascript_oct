const images = document.querySelector('#images')

// images.addEventListener('click',function(e){
//   console.log(e.target.parentNode);
//   if(e.target.parentNode){ // will remive all images when any image clicked
//     images.remove()
//   }
  
// },false)

// images.addEventListener('click',function(e){
//   console.log(e.target.tagName);
//    let removeIt = e.target.parentNode
//      removeIt.remove() // when click on image thrn img will be delete but if any li clicked then all images will be deleted because of parentNode  the li parent node is ul when img is clicked its parentNode is li
// })

images.addEventListener('click',function(e){
  console.log(e.target.tagName);
  
  if(e.target.tagName === 'IMG'){
    console.log(e.target.id);
    let removeIt = e.target.parentNode
    removeIt.remove()
  }
})