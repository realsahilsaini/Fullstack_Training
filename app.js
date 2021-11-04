let value = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')

    }, 1000)
})

console.log(value)

setTimeout( () => {
    console.log(value)
}, 2000)



//Here the new keyword will create new promise
//Promise is a object
//With promise we have to pass two parameters resolve & reject
//Resolve: Once the promise is complete
//Reject: If the promise is incomplete

/* Promise has 3 states

1. Fulfil
2. Pending 
3. Rejected

*/
