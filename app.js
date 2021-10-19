//Callback function 

var arr = ['Go to GYM', 'Eat food', 'Clean House']


// default approach
// for(var i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

//Another approach (Remember: here 'element' is not a keyword)
// var CallbackFunction = (element) => {
//     console.log(element)
// }

//Another approach by using arrow function 

arr.forEach( (element, index) => {
    console.log(element, index)
})

