import { Card } from "./components/Card";
import { Hand } from "./Hand";

const hand = new Hand
// const card = new Card({rank: 3, suit:'club'});


// console.log(card.element)
document.querySelector("#target").appendChild(hand.element)

