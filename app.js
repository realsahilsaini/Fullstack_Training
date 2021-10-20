// const a = document.querySelectorAll('input')
// const b = document.querySelectorAll('input')
// OR 
const a = document.getElementsByTagName('input')[0]
const b = document.getElementsByTagName('input')[1]

const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultbox = document.querySelector('.result')


//ADD
const sum = () => {
    //here the parseint functions converts string to integer
    const result = parseInt(a.value) + parseInt(b.value)
    resultbox.innerHTML = result
    console.log(resultbox)
}

add.addEventListener('click', sum)

//MULTIPLY
const multiplication = () => {
    //here the parseint functions converts string to integer
    const result = parseInt(a.value) * parseInt(b.value)
    resultbox.innerHTML = result
    console.log(resultbox)
}

multiply.addEventListener('click', multiplication)

// OR 

const calculate = (operation) => {
    if(operation == 'add'){
        console.log('adding')
    }
    else if(operation =='multiply'){
        console.log('multiply')
    }
}

// Here we are calling function inside another function 
add.addEventListener('click',() =>{
    return calculate('add')
})

multiply.addEventListener('click', () =>{
    return calculate('multiply')
})
