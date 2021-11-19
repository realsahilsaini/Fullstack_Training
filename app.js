
  // -------------------Let us understand destructuring feature-----------------------------------------


  const person = ({
    name: "Prem",
    age: 19,
    country: "India"
  })

  console.log(person.name)
  console.log(`Hi ${person.name} you are ${person.age}`)
  
  // suppose if we dont wanna use person. again and again 
  console.log(`Hi ${name} you are ${ age}`)

  // here it is 

  const{name, age, country} = person