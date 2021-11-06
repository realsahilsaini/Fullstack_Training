// This will give error because, here we are not waiting for the Promise to resolve
// const response = fetch('https://jsonplaceholder.typicode.com/users')

// const data = response.json()

// console.log(data)

// Correct method 

const fetchdata = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    console.log(response)
    
    const data = await response.json()

    console.log(data)

}

fetchdata()