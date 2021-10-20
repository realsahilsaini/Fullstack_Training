var button = document.querySelector('button')
var input = document.querySelector('input')
var list = document.querySelector('ul')

var chores =[]

// Another approach to delete itemsn in the array 
// var deleteItem = (value) =>{
//     //This is built-in method is used to get index of the Array
//     const index = chores.indexOf(value)
//     chores.splice(index, 1)
//     console.log(chores)
// }


// To check whether we have selected all the correct tags 
// console.log(button, input, list)

const callbackfunc = (event) => {
    
    // console.log(event)
    // console.log(event.target)

//    This shows the value in the input box  
    // console.log(input.value)

    // To view the contents present in any tag 
    // console.log(button.innerHTML)


    // This if...else statement check wheather the text already or not  
    const inputValue = input.value
    if(chores.includes(input.value)){
        console.log('already exists')
    }

    else{
    chores.push(inputValue)
    const element = document.createElement('li')
    const textNode = document.createTextNode(inputValue)
    element.appendChild(textNode)
    list.appendChild(element)

    //This makes input empty as soon as the users adds it 
    input.value= ''

    element.addEventListener('click', (e)=>{
        e.target.remove() 
    })


}
}

button.addEventListener('click', callbackfunc)