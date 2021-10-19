var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

// To check whether we have selected all the correct tags 
// console.log(button, input, list)

const callbackfunc = (event) => {
    
    // console.log(event)
    // console.log(event.target)

//    This shows the value in the input box  
    // console.log(input.value)

    // To view the contents present in any tag 
    // console.log(button.innerHTML)
  
    const inputValue = input.value
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)
}



button.addEventListener('click', callbackfunc)