//Modules

//path module

const path = require('path')

// console.log(path)

// console.log(path.resolve('./utils.js'))
//resolve converts an relative part to absolute path 

console.log(path.relative('../', "./utils.js"))
//1st parameter: With what is should be relative (here it is last to last folder './')
// 2nd parameter: file location