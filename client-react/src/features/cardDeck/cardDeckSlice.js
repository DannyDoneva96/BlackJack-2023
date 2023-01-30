import { createSlice } from "@reduxjs/toolkit";


const initialState = [
    {
        card: "2♠",
        value: 2,
        image: require('../../assets/cards/2/two of spades.png'),

    }, {
        card: "2♦",
        value: 2,
        image: require('../../assets/cards/2/two of diamonds.png'),
    }, {
        card: "2♣",
        value: 2,
        image: require('../../assets/cards/2/two of clubs.png'),
    }, {
        card: "2♡",
        value: 2,
        image: require('../../assets/cards/2/two of hearts.png'),
    },
    {
        card: "3♠",
        value: 3,
        image: '',
    },
    {
        card: "3♦",
        value: 3,
        image: '',
    },
    {
        card: "3♣",
        value: 3,
        image: '',
    },
    {
        card: "3♡",
        value: 3,
        image: '',
    },
    {
        card: "4♠",
        value: 4,
        image: '',
    },
    {
        card: "4♦",
        value: 4,
        image: '',
    },
    {
        card: "4♣",
        value: 4,
        image: '',
    },
    {
        card: "4♡",
        value: 4,
        image: '',
    }, {
        card: "5♠",
        value: 5,
        image: '',
    },
    {
        card: "5♦",
        value: 5,
        image: '',
    }, {
        card: "5♣",
        value: 5,
        image: '',
    },
    {
        card: "5♡",
        value: 5,
        image: '',
    },
    {
        card: "6♠",
        value: 6,
        image: '',
    },
    {
        card: "6♦",
        value: 6,
        image: '',
    }, {
        card: "6♣",
        value: 6,
        image: '',
    },
    {
        card: "6♡",
        value: 6,
        image: '',
    },
    {
        card: "7♠",
        value: 7,
        image: '',
    },
    {
        card: "7♦",
        value: 7,
        image: '',
    }, {
        card: "7♣",
        value: 7,
        image: '',
    },
    {
        card: "7♡",
        value: 7,
        image: '',
    },
    {
        card: "8♠",
        value: 8,
        image: '',
    },
    {
        card: "8♦",
        value: 8,
        image: '',
    }, {
        card: "8♣",
        value: 8,
        image: '',
    },
    {
        card: "8♡",
        value: 8,
        image: '',
    },
    {
        card: "9♠",
        value: 9,
        image: '',
    },
    {
        card: "9♦",
        value: 9,
        image: '',
    }, {
        card: "9♣",
        value: 9,
        image: '',
    },
    {
        card: "9♡",
        value: 9,
        image: '',
    },
    {
        card: "10♠",
        value: 10,
        image: '',
    },
    {
        card: "10♦",
        value: 10,
        image: '',
    }, {
        card: "10♣",
        value: 10,
        image: '',
    },
    {
        card: "10♡",
        value: 10,
        image: '',
    },
    {
        card: "J♠",
        value: 10,
        image: '',
    },
    {
        card: "J♦",
        value: 10,
        image: '',
    }, {
        card: "J♣",
        value: 10,
        image: '',
    },
    {
        card: "J♡",
        value: 10,
        image: '',
    },
    {
        card: "Q♠",
        value: 10,
        image: '',
    },
    {
        card: "Q♦",
        value: 10,
        image: '',
    }, {
        card: "Q♣",
        value: 10,
        image: '',
    },
    {
        card: "Q♡",
        value: 10,
        image: '',
    },
    {
        card: "K♠",
        value: 10,
        image: '',
    },
    {
        card: "K♦",
        value: 10,
        image: '',
    }, {
        card: "K♣",
        value: 10,
        image: '',
    },
    {
        card: "K♡",
        value: 10,
        image: '',
    },
    {
        card: "A♠",
        value: 1,
        image: '',
    },
    {
        card: "A♦",
        value: 1,
        image: '',
    }, {
        card: "A♣",
        value: 1,
        image: '',
    },
    {
        card: "A♡",
        value: 1,
        image: '',
    },
]

const cardDeckSlice = createSlice({
    name: 'cardDeck',
    initialState,
    reducers: {}
});

export const getCardDeck = (state) => state.cardDeck;
export default cardDeckSlice.reducer;