//Selecting table
const table = document.querySelector('table')
console.log(table)




fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
// .tden(data => {console.log(data)} )
.then(data => {
    console.log(data)
    data.forEach(user => {
        let newRow = document.createElement('tr')

        // let dataID = document.createElement('td')
        // let dataID_textNode = document.createTextNode(user.id)
        // dataID.appendChild(dataID_textNode)
        // newRow.appendChild(dataID)
        // table.appendChild(newRow)
       
        // Above code is just for user's id. That mean we have to write same code for name,username, email



        // OR 

        //Following is the efficient code

        // Here we are making a template  
        let  element = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>`
        console.log(element)
        
        newRow.innerHTML = element
        table.appendChild(newRow)
        
    })
})

