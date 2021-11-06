let Name = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sahil')
    },3000)
})

Name.then(name => {console.log(name)})

