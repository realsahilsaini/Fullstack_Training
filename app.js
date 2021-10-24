let car = {
    name: "M6",
    manufacturer: "Mazada",
    // A function inside a object is a method 
    print: () => {
        console.log('Car')

        //'this' keyword inside the arrow function points to the window object, but 'this' keyword in the function declaration change depending in which object it is in
        console.log(this)

        // Template String 
        console.log(`${this.name} was created by ${this.manufacturer}`)
        
    }
    
}

car.print()