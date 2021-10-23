let car = {
    name: "M6",
    manufacturer: "Mazada",
    // A function inside a object is a method 
    print: function() {
        console.log('Car')
        console.log( this.name + ' by ' + this.manufacturer)
    }
    
}

car.print()