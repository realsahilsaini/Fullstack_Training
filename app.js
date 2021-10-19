var list = document.querySelector('ul')

var arr = ['Go to GYM', 'Cook oatmeal', 'Eat']

for(var i=0 ; i < arr.length ; i++){
    // This is how we create new element 
    var element = document.createElement('li')
    var textNode = document.createTextNode(arr[i])
    //Appending/linking the text node to li 
    element.appendChild(textNode)
    //Appending/linking the li to ul
    list.appendChild(element)
    console.log(textNode)
}