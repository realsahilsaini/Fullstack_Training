const add = () =>{
    console.log('I add stuff')
}

const subtract = () =>{
    console.log('I subtract stuff')
}
const multiply = () =>{
    console.log('I multiply stuff')
}
const divide = () =>{
    console.log('I divide stuff')
}


module.exports.add = add
module.exports.subtract = subtract
module.exports.multiply = multiply
module.exports.divide = divide

//all the above functions are now in exports object 
// console.log(module)