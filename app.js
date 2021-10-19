// function greet(name ,age){
//     console.log('Hey ' + name + ", Your age is " + age)
// }

// This is the default parameters
// greet('Sahil', 19)

//---------------------------------------------

// function greet(name='John' ,age='20'){
//     console.log('Hey ' + name + ", Your age is " + age)
// }
// greet()

//---------------------------------------------

// function sum(a,b){
//     console.log(a+b)
// }

// sum(5,4)

//---------------------------------------------
// Function declaration 
// function add(a=0,b=0){
//     var sum = a+ b
//     return sum
// }

//Function expression 
// var add = function (a=0, b=0){
//     var sum = a+b
//     return sum;
// }
// OR (without using function keyword)
// var add = (a=0, b=0) => {
//     var sum = a+b
//     return sum;
// }

//This is also equivalent to 
var add = (a=0, b=0) => a+b

console.log(add(10,20))