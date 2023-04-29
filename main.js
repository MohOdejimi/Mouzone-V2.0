let menu = document.querySelector('.menu')
let navigation = document.querySelector('.navigation')
let right = document.querySelector('#right')
let down = document.querySelector('#down')
menu.addEventListener('click', show) 
function show () {
  if (navigation.style.display === 'none') {
    navigation.style.display = 'block'
    right.style.display = 'none'
    down.style.display = 'inline'
  } else {
    navigation.style.display = 'none'
    down.style.display = 'none'
    right.style.display = 'inline'
  }
}