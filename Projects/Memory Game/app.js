const cardArray = [
    {
        name:'fries',
        img: 'images/001-french-fries.png'
    },
    {
        name: 'chicken',
        img: 'images/002-fried-chicken.png'
    },
    {
        name: 'milkshake',
        img: 'images/004-milkshake.png'
    },
    {
        name: 'rice',
        img: 'images/005-rice.png'
    },
    {
        name: 'pizza',
        img: 'images/003-pizza.png'
    },
    {
        name: 'sushi',
        img: 'images/006-sushi.png'
    },
    {
        name:'fries',
        img: 'images/001-french-fries.png'
    },
    {
        name: 'chicken',
        img: 'images/002-fried-chicken.png'
    },
    {
        name: 'milkshake',
        img: 'images/004-milkshake.png'
    },
    {
        name: 'rice',
        img: 'images/005-rice.png'
    },
    {
        name: 'pizza',
        img: 'images/003-pizza.png'
    },
    {
        name: 'sushi',
        img: 'images/006-sushi.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay =document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds =[]
const cardswon =[]

function createBoard () {
    for (let i =0; i<cardArray.length; i++) {
       const card =  document.createElement('img')
       card.setAttribute('src','images/color-star.png')
       card.setAttribute('data-id',i)
       card.setAttribute('class', 'card')
       card.addEventListener('click', flipCard)
       gridDisplay.append(card)

    }
}

createBoard()

function flipCard() {
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch , 500)
    }

}

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log("Check for a Match!")

    if( optionOneId == optionTwoId) {
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/white-star.png')
        cards[optionTwoId].setAttribute('src','images/white-star.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardswon.push(cardsChosen)

    } else {
        cards[optionOneId].setAttribute('src','images/color-star.png')
        cards[optionTwoId].setAttribute('src','images/color-star.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardswon.length

    cardsChosen = []
    cardsChosenIds = []

    if (cardswon.length == (cardArray.length/2)) [
        resultDisplay.innerHTML = 'Congratulations, you found them all!'
    ]

}