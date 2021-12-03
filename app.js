// How to store array in local storage 


const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

// localStorage.clear()

const arr = [1, 2, 3, 4, 5]

// localStorage.setItem('val', arr)

//Local storage apparently only supports string
//But yet the arr will be displayed as string
// console.log(localStorage.getItem('val'))

// so there is a in-built function that does this job input i.e to give output in the array
// localStorage.setItem('val', JSON.stringify(arr))
// It is still a string in the console log 
// console.log(localStorage.getItem('val'))

// To get back to its form 
// console.log(JSON.parse(localStorage.getItem('val')))
