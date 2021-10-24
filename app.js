let car = {
    name: "M6",
    manufacturer: "Mazada",
    // A function inside a object is a method 
    print: () => {
        console.log('Car')

        // Template String 
        console.log(`${car.name} was created by ${car.manufacturer}`)
        
    }
    
}

// console.log(Object.keys(car))
// console.log(Object.values(car))

//Checks whether the property exists or not
// console.log(car.hasOwnProperty('name'))

