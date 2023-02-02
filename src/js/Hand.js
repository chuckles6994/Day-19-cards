import { Card } from "./components/Card";

export class Hand {
    constructor() {
        this.element = document.createElement('div')
        
        this.cardsData = [
            {rank: 3, suit:'diamond'},
            {rank: 4, suit:'spade'},
            {rank: 5, suit:'heart'},
            {rank: 'A', suit:'club'},
            // handleClick can also work like this:
            // {rank: 3, suit:'diamond', handleClick: this.dropFirst},
            // {rank: 4, suit:'spade', handleClick: this.dropFirst},
            // {rank: 5, suit:'heart', handleClick: this.dropFirst},
            // {rank: 'A', suit:'club', handleClick: this.dropFirst},
        ]

        this.refreshElement()
    }

    refreshElement = () => {
        console.log('refreshing hand')
        this.element.innerHTML = `
        <h3>My hand</h3>
        <button> Drop </button>
        `;
        // places it all on the same line
        this.element.classList.add('cards-container')
        
        // loops through cardsData
        this.cardsData.forEach((cardData) =>{
        // ...or handleClick can work as a collective action
        cardData.handleClick = this.dropFirst
        const card1 = new Card(cardData);
        this.element.appendChild(card1.element);
        })

    // drops first card when button pressed
    this.element.querySelector('button').addEventListener('click', this.dropFirst)

    console.log(this)
    }

    dropFirst = () => {
        this.cardsData.shift()
        this.refreshElement()
    }
    dropCard = (index) => {
        this.cardsData.splice(index, 1)
        this.refreshElement()
    }
}