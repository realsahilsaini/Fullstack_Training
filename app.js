// console.log(localStorage)

// localStorage.setItem('InputValue', "Something")
// console.log(localStorage.getItem("InputValue")) 

// To clear local storage we have two methods:
// 1. Either to do it manually via applications 
// 2. localStorage.clear()

// localStorage.clear()

// ----------------------------------------------

const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

div.innerHTML = localStorage.getItem('InputValue')

button.addEventListener('click', (req, res) => {
    localStorage.setItem('InputValue', input.value)
    div.innerHTML = input.value
})