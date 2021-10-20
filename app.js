// const a = document.querySelectorAll('input')
// const b = document.querySelectorAll('input')
// OR 
const a = document.getElementsByTagName('input')[0]
const b = document.getElementsByTagName('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultbox = document.querySelector('.result')


const calculate = (event, operation) => {
    // if(operation == 'add'){
    //     console.log('adding')
    // }
    // else if(operation =='multiply'){
    //     console.log('multiply')
    // }
    switch(operation){
        case 'add':
        resultbox.innerHTML =  parseInt(a.value) + parseInt(b.value)
        break;

        case 'multiply':
        resultbox.innerHTML =  parseInt(a.value) * parseInt(b.value)
        break;

        default:
            resultbox.innerHTML = "Not a valid input"
    }
}


// Here we are calling function inside another function 
add.addEventListener('click',(event) =>{
    return calculate(event, 'add')
})

multiply.addEventListener('click', (event) =>{
    return calculate(event, 'multiply')
})
