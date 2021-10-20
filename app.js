// Arrays and its methods
var arr = [1,2,3,4,5, 6, 7, 8]

// arr.push(6);
// pushes new element to last of the array 


// arr.unshift(6)
// pushes new element to beginning of the array 


// arr.shift()
// Delete the first element of the array


//To select particular part of the array
//we'll use slice
/*remember: 
1. Here slice will make a new array not like others where they directly made changes to the array itself.
2. Here the first index is inclusive and last is exclusive
*/
// var new_arr = (arr.slice(2,5)) 
// console.log(new_arr)


//To print even number from the array
//First approach
// var new_arr = [] 
// for(i=0; i< arr.length; i++){
//     if(arr[i]%2==0) new_arr.push(arr[i])
// }

// console.log(new_arr)

//Optimized approach using built-in methods
// var new_arr = arr.filter((element, index)=>{
//     if(element%2==0) return true
//     // Here whenever it return true element will be added in the new array 
//     // console.log(element, index)
// })


//To remove specific element in the array using built-in 
//Parameters: (index, no. of elements to remove after the index)
// arr.splice(3, 3)

//This will output all the removed elements 
console.log(arr.splice(3, 3))


console.log(arr)



