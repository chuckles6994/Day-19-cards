export class Card {
    constructor (properties) {
        this.rank = properties.rank
        this.suit = properties.suit
        this.element = document.createElement('div')
        this.faceDown = false;

        this.handleClick = properties.handleClick;

        this.refreshElement()
    }

    refreshElement = () => {
        console.log("refresh element");
        this.element.classList.add('card');
        this.element.classList.add(this.suit);  
        if (this.faceDown){
            this.element.classList.add('face-down');
        } else {
            this.element.classList.remove('face-down');
        }

        this.element.innerHTML = `
        <h2 class="rank">${this.rank}</h2>
        `;
        this.element.addEventListener('click', this.handleClick= () => {
            this.handleClick(this.index)
        })
        // this.element.addEventListener('mouseenter', this.flipCard)
        // this.element.addEventListener('mouseleave', this.flipCard)
        // this.element.querySelector('h2').addEventListener('click', this.increaseRank);
    }
    flipCard = () => {
        this.faceDown = !this.faceDown
        this.refreshElement()
        // this.element.querySelector('h2').addEventListener('mouseenter',()=>
        // this.element.classList.add('face-down'))
        // this.element.querySelector('h2').addEventListener('mouseenter',()=>
        // this.element.classList.add('face-up'))
    }
    // increaseRank = () =>{
    //     this.rank ++;
    //     console.log(this.rank)
    //     this.refreshElement()
    // }
}