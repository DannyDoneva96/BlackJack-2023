import { createSlice } from "@reduxjs/toolkit";
import cardsBackSide from '../../assets/images/back-removebg-preview.png'
import audioChipAtStart from '../../assets/sounds/chipAtStart.mp3'


const initialState = {
    initialCash:0,
   
    hasChips: false,
    total: 0,
    bet: [],
    dealerCards: [{ image: cardsBackSide }, { image: cardsBackSide }],
    playerCards: [{ image: cardsBackSide }, { image: cardsBackSide }],
    dealerCardsValue: 0,
    playerCardsValue: 0,
    isBJPlayer: false,
    isBJDealer:false,

}

export const playerChipsSliceAdd = createSlice({
    name: 'playerChipsAdd',
    initialState,
    reducers: {
        chipFiveAdd: (state) => {
           state.initialCash = 500
            state.hasChips = true;
        },
        chipTenAdd: (state) => {
            state.initialCash = 1000
            state.hasChips = true;
        },
        chipTwentyAdd: (state) => {
            state.initialCash = 2000
            state.hasChips = true;
        },
        chipFiftyAdd: (state) => {
            state.initialCash = 5000
            state.hasChips = true;
        },

        chipFiveRemove: (state) => {
            state.bet.push(require('../../assets/chips/dark-blue-chip – Копие.png'))
            state.initialCash -= 5;
            state.total += 5
        },
        chipTenRemove: (state) => {
            state.bet.push(require('../../assets/chips/grey-chip – Копие.png'))
            state.initialCash -= 10;
            state.total += 10;

        },
        chipTwentyRemove: (state) => {
            state.bet.push(require('../../assets/chips/green-chip – Копие.png'))
            state.initialCash -= 20;
            state.total += 20;

        },
        chipFiftyRemove: (state) => {
            state.bet.push(require('../../assets/chips/red-chip-removebg-preview – Копие.png'))
            state.initialCash -= 50;
            state.total += 50;

        },
        chipHundredRemove: (state) => {
            state.bet.push(require('../../assets/chips/purple-chip – Копие.png'))
            state.initialCash -= 100;
            state.total += 100;

        },
        playAudio: (state)=>{
                new Audio(audioChipAtStart).play();
        },

        LastOneRemove: (state) => {

            let last = state.bet.pop()
            if (last === '/static/media/dark-blue-chip – Копие.3a0c00978220e1dbc78f.png') {
                state.total -= 5
                state.initialCash += 5
            } else if (last === '/static/media/grey-chip – Копие.2fe1c62ee25b0ae3aca5.png') {
                state.total -= 10;
                state.initialCash += 10;
            } else if (last === '/static/media/green-chip – Копие.5f48fa5cdbf813467298.png') {
                state.total -= 20;
                state.initialCash += 20;
            } else if (last === '/static/media/red-chip-removebg-preview – Копие.0a4dc1cdeb837c02df3c.png') {
                state.total -= 50;
                state.initialCash += 50;
            } else if (last === '/static/media/purple-chip – Копие.2e44bc7335959af17904.png') {
                state.initialCash += 100;
                state.total -= 100;
            }
        },
        getOneCard: (state, cardDeck) => {

            const onecard = cardDeck.payload[Math.floor(Math.random() * cardDeck.payload.length)];

            state.playerCards.push(onecard);
            state.playerCardsValue += onecard.value;

        },

        getOneDealerCard: (state, cardDeck) => {

            const onecard = cardDeck.payload[Math.floor(Math.random() * cardDeck.payload.length)];

            state.dealerCards.push(onecard);
            state.dealerCardsValue += onecard.value;
        },

        getDealerCards: (state, cardDeck) => {

            let random1 = Math.floor(Math.random() * cardDeck.payload.length);
            let random2 = Math.floor(Math.random() * cardDeck.payload.length);
            
            if (random1 !== random2 &&
                random1 !== -1 &&
                random2 !== -1 &&
                random1 <= cardDeck.payload.length &&
                random2 <= cardDeck.payload.length) {
                let cards = [cardDeck.payload[random1], cardDeck.payload[random2]]
                state.dealerCards = cards
                if ((cards[0].value === 1 && cards[1].value === 10) ||(cards[0].value === 10 && cards[1].value === 1) ){
                    state.isBJDealer = true
                }
                let value = cards
                    .reduce((acc, card) => {
                        acc += card.value
                        return acc
                    }, 0);

                state.dealerCardsValue = value;
            }
        },
        getPlayerCards: (state, cardDeck) => {
            let random1 = Math.floor(Math.random() * cardDeck.payload.length)
            let random2 = Math.floor(Math.random() * cardDeck.payload.length)
            if (random1 !== random2 &&
                random1 !== -1 &&
                random2 !== -1 &&
                random1 <= cardDeck.payload.length &&
                random2 <= cardDeck.payload.length) {
                let cards = [cardDeck.payload[random1], cardDeck.payload[random2]]
                state.playerCards = cards
                if ((cards[0].value === 1 && cards[1].value === 10) ||(cards[0].value === 10 && cards[1].value === 1) ){
                    state.isBJPlayer = true
                }
                let value = cards
                    .reduce((acc, card) => {
                        acc += card.value
                        return acc
                    }, 0);

                state.playerCardsValue = value;
            }
        },
        nextGame: (state) => {
            state.isBJDealer= false;
            state.isBJPlayer = false;
            state.bet = [];
            state.total = 0;
            state.dealerCards = [{ image: cardsBackSide }, { image: cardsBackSide }];
            state.playerCards = [{ image: cardsBackSide }, { image: cardsBackSide }];
        }
    }
});

export const {
    chipFiveAdd,
    chipTenAdd,
    chipTwentyAdd,
    chipFiftyAdd,
    chipFiveRemove,
    chipTenRemove,
    chipTwentyRemove,
    chipFiftyRemove,
    chipHundredRemove,
    LastOneRemove,
    getOneCard,
    getOneDealerCard,
    getDealerCards,
    getPlayerCards,
    nextGame,
    isBJDealer,
    isBJPlayer,
    playAudio
} = playerChipsSliceAdd.actions;

export const gameState = (state) => state.playerChipAdd;
export default playerChipsSliceAdd.reducer;