const parent = document.querySelector('div.grid')
const but = document.querySelector('button')
const getText = document.querySelector('input')

const getData = async (item) => {
    console.log(item)
    const url = `https://api.edamam.com/search?app_id=bd51454f&app_key=3b359328e30cad3141319969dfedaba9&q=${item}`
    console.log(url)
    const res = await fetch(url)
    const data = await res.json()
    const recipies = data.hits
    recipies.forEach(item => {
        const {recipe} = item

        // This both will do the same job 
        console.log(recipe)
        console.log(item.recipe)

        const{label, image, source, calories} = recipe
        console.log(label, image, source, calories)

        const template =
         ` <article class="card">
        <img class="card__image" src="${image}" />
        <div class="card__data">
          <div class="card__info">
            <h2>${label}</h2>
            <p>${source}</p>
          </div>
          <h3 class="card__price">${calories.toFixed(2)}</h3>
          <button class="card__add">+</button>
        </div>
      </article>`
      /*Here the to fixed method limit the decimal */


      const newCard = document.createElement('article')
      newCard.setAttribute('class', 'card')
      newCard.setAttribute('style','margin-bottom:30px')
      newCard.innerHTML = template
      console.log(newCard)
      parent.appendChild(newCard)
    })  
    }


    but.addEventListener('click', (e) => {
        getData(getText.value)
    })