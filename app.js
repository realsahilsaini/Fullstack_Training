let car = {
    name: "M6",
    manufacturer: "Mazada",
    // A function inside a object is a method 
    print: function() {
        console.log('Car')
        // console.log( this.name + ' by ' + this.manufacturer)
        // console.log( car.name + ' by ' + car.manufacturer)
        console.log(this)
    }
    
}

car.print()