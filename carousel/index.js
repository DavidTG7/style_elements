'use strict'


const main = document.querySelector('.main') 
const dot = document.querySelectorAll('.dot')

dot.forEach((oneDot, i) => {
  dot[i].addEventListener('click', () => {

    let position = i
    let operation = position * -50

    main.style.transform = `translateX(${ operation }%)`;

    dot.forEach((oneDot, i) => {
      dot[i].classList.remove('active')
    })
    dot[i].classList.add('active')

  })
})