const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
]

cardArray.sort(()=>0.5 - Math.random());
const result =  document.querySelector('#result');
const gridDisplay = document.querySelector('#grid');
const score = document.querySelector('h3');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
    for (let i=0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
       card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
        card.style.cursor = 'pointer';
    }
}

createBoard();

function checkMatch() {
    const cards = document.querySelectorAll('img');
    let optionOneId = cardsChosenId[0];
    let optionTwoId = cardsChosenId[1];
    console.log(cards)
    console.log('check match');
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('You have clicked the same image!')
    }
    if(cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
    }
    result.textContent = cardsWon.length
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length === (cardArray.length/2)) {
        result.textContent = 'Congratulations you found them all'
        score.style.display = 'none'
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    console.log(cardsChosen);
    console.log(cardsChosenId)
    cardsChosenId.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

