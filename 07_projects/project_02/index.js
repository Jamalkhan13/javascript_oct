const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#result')

  if( height ===''  || height<0 || isNaN(height)){
    result.innerHTML = `please enter a valid height ${height}`
  }
  else if(weight === '' || weight<=0 || isNaN(weight)){
    result.innerHTML = `please enter a valid weight ${weight}`
  } else{
    const bmi =  (weight/((height*height)/10000)).toFixed(2)
    // show result 
    result.innerHTML = `<span>${bmi}</span>`
    if(bmi<18.6){
      result.innerHTML = `<span>${bmi}, underweight</span>`
    } else if(bmi>18.6 && bmi<24.9){
      result.innerHTML = `${bmi} normal`
    } 
    else if(bmi>24.9){
      result.innerHTML = `<span>${bmi} overweight</span>`
    }
  }
})