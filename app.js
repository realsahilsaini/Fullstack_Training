//Modules

//File system (fs)

const fs = require('fs')

// console.log(fs)

//Let's discuss 2 Imp 

// fs.readFile('./test.txt', 'utf8',  (error, data) => {
//     if(error) console.log(error)
//     else console.log(data)
// })

//If it executes successfully it would show buffer i.e raw data
//N here we have to encode the buffer
//By adding utf8 we can encode it 
//Similarly for another encoding
//Also by adding 'tostringmethod()' in the else statement
//Remember: read file is an asynchronous task
//To make it synchronous:

// console.log(fs.readFileSync('./test.txt', 'utf8'))

//------------------------------------

// This overwrites
// fs.writeFile('./test.txt', "Hi, Sahil here!",  (error) => {
//     if(error) console.log(error)
// })

// To append data 
fs.writeFile('./test.txt', `Append me 2 ${fs.readFileSync('./test.txt', 'utf8')}`, 
(error) => {
    if(error) console.log(error)
})

//Read and Write both has sync and Async





