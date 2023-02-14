import { createSlice } from "@reduxjs/toolkit";
import cardsBackSide from '../../assets/images/back-removebg-preview.png'


const initialState = {
    chipFive: 0,
    chipTen: 0,
    chipTwenty: 0,
    chipFifty: 0,
    chipHundred: 0,
    hasChips: false,
    total: 0,
    bet: [],
    dealerCards: [{ image: cardsBackSide }, { image: cardsBackSide }],
    playerCards: [{ image: cardsBackSide }, { image: cardsBackSide }],
    dealerCardsValue: 0,
    playerCardsValue: 0,

}

export const playerChipsSliceAdd = createSlice({
    name: 'playerChipsAdd',
    initialState,
    reducers: {
        chipFiveAdd: (state) => {
            state.chipFive += 5;
            state.chipTen += 5;
            state.chipTwenty += 5;
            state.chipFifty += 5;
            state.chipHundred += 5;
            state.hasChips = true;
        },
        chipTenAdd: (state) => {
            state.chipFive += 10;
            state.chipTen += 10;
            state.chipTwenty += 10;
            state.chipFifty += 10;
            state.chipHundred += 10;
            state.hasChips = true;
        },
        chipTwentyAdd: (state) => {
            state.chipFive += 20;
            state.chipTen += 20;
            state.chipTwenty += 20;
            state.chipFifty += 20;
            state.chipHundred += 20;
            state.hasChips = true;
        },
        chipFiftyAdd: (state) => {
            state.chipFive += 50;
            state.chipTen += 50;
            state.chipTwenty += 50;
            state.chipFifty += 50;
            state.chipHundred += 50;
            state.hasChips = true;
        },

        chipFiveRemove: (state) => {
            if (state.chipFive === 0) return
            state.bet.push(require('../../assets/chips/dark-blue-chip – Копие.png'))
            state.chipFive -= 1;
            state.total += 5
        },
        chipTenRemove: (state) => {
            if (state.chipTen === 0) return
            state.bet.push(require('../../assets/chips/grey-chip – Копие.png'))
            state.chipTen -= 1;
            state.total += 10;

        },
        chipTwentyRemove: (state) => {
            if (state.chipTwenty === 0) return
            state.bet.push(require('../../assets/chips/green-chip – Копие.png'))
            state.chipTwenty -= 1;
            state.total += 20;

        },
        chipFiftyRemove: (state) => {
            if (state.chipFifty === 0) return
            state.bet.push(require('../../assets/chips/red-chip-removebg-preview – Копие.png'))
            state.chipFifty -= 1;
            state.total += 50;

        },
        chipHundredRemove: (state) => {
            if (state.chipHundred === 0) return
            state.bet.push(require('../../assets/chips/purple-chip – Копие.png'))
            state.chipHundred -= 1;
            state.total += 100;

        },

        LastOneRemove: (state) => {

            let last = state.bet.pop()
            if (last === '/static/media/dark-blue-chip – Копие.3a0c00978220e1dbc78f.png') {
                state.total -= 5
                state.chipFive += 1
            } else if (last === '/static/media/grey-chip – Копие.2fe1c62ee25b0ae3aca5.png') {
                state.total -= 10;
                state.chipTen += 1;
            } else if (last === '/static/media/green-chip – Копие.5f48fa5cdbf813467298.png') {
                state.total -= 20;
                state.chipTwenty += 1;
            } else if (last === '/static/media/red-chip-removebg-preview – Копие.0a4dc1cdeb837c02df3c.png') {
                state.total -= 50;
                state.chipFifty += 1;
            } else if (last === '/static/media/purple-chip – Копие.2e44bc7335959af17904.png') {
                state.chipHundred += 1;
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
                let value = cards
                    .reduce((acc, card) => {
                        acc += card.value
                        return acc
                    }, 0);

                state.playerCardsValue = value;
            }
        },
        nextGame: (state) => {
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
    nextGame
} = playerChipsSliceAdd.actions;

export const gameState = (state) => state.playerChipAdd;
export default playerChipsSliceAdd.reducer;