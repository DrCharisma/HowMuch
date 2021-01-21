function calculate(){
  let input = document.getElementById('number').value
  let howMuchBtc = input/0.05
  let todayPrice = howMuchBtc*31742
  document.getElementById('newnumber').innerHTML = todayPrice
}

function space(){
  if(document.getElementById('newnumber').innerHTML.length%2 != 0){

  }
}
