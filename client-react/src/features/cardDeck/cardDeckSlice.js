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
        image: require('../../assets/cards/3/three of spades.png'),
    },
    {
        card: "3♦",
        value: 3,
        image: require('../../assets/cards/3/three of diamonds.png'),
    },
    {
        card: "3♣",
        value: 3,
        image: require('../../assets/cards/3/three of clubs.png'),
    },
    {
        card: "3♡",
        value: 3,
        image: require('../../assets/cards/3/three of hearts.png'),
    },
    {
        card: "4♠",
        value: 4,
        image: require('../../assets/cards/4/four of spades.png'),
    },
    {
        card: "4♦",
        value: 4,
        image: require('../../assets/cards/4/four of diamonds.png'),
    },
    {
        card: "4♣",
        value: 4,
        image:  require('../../assets/cards/4/four of clubs.png'),
    },
    {
        card: "4♡",
        value: 4,
        image: require('../../assets/cards/4/four of hearts.png'),
    }, {
        card: "5♠",
        value: 5,
        image: require('../../assets/cards/5/five of spades.png'),
    },
    {
        card: "5♦",
        value: 5,
        image: require('../../assets/cards/5/five of diamonds.png'),
    }, {
        card: "5♣",
        value: 5,
        image:  require('../../assets/cards/5/five of clubs.png'),
    },
    {
        card: "5♡",
        value: 5,
        image: require('../../assets/cards/5/five of hearts.png'),
    },
    {
        card: "6♠",
        value: 6,
        image: require('../../assets/cards/6/six of spades.png'),
    },
    {
        card: "6♦",
        value: 6,
        image: require('../../assets/cards/6/six of diamonds.png'),
    }, {
        card: "6♣",
        value: 6,
        image:  require('../../assets/cards/6/six of clubs.png'),
    },
    {
        card: "6♡",
        value: 6,
        image: require('../../assets/cards/6/six of hearts.png'),
    },
    {
        card: "7♠",
        value: 7,
        image: require('../../assets/cards/7/seven of spades.png'),
    },
    {
        card: "7♦",
        value: 7,
        image: require('../../assets/cards/7/seven of diamonds.png'),
    }, {
        card: "7♣",
        value: 7,
        image:  require('../../assets/cards/7/seven of clubs.png'),
    },
    {
        card: "7♡",
        value: 7,
        image: require('../../assets/cards/7/seven of hearts.png'),
    },
    {
        card: "8♠",
        value: 8,
        image: require('../../assets/cards/8/eight of spades.png'),
    },
    {
        card: "8♦",
        value: 8,
        image: require('../../assets/cards/8/eight of diamonds.png'),
    }, {
        card: "8♣",
        value: 8,
        image: require('../../assets/cards/8/eight of clubs.png'),
    },
    {
        card: "8♡",
        value: 8,
        image: require('../../assets/cards/8/eight of hearts.png'),
    },
    {
        card: "9♠",
        value: 9,
        image: require('../../assets/cards/9/nine of spades.png'),
    },
    {
        card: "9♦",
        value: 9,
        image: require('../../assets/cards/9/nine of diamonds.png'),
    }, {
        card: "9♣",
        value: 9,
        image: require('../../assets/cards/9/nine of clubs.png'),
    },
    {
        card: "9♡",
        value: 9,
        image: require('../../assets/cards/9/nine of hearts.png'),
    },
    {
        card: "10♠",
        value: 10,
        image: require('../../assets/cards/10/ten of spades.png'),
    },
    {
        card: "10♦",
        value: 10,
        image: require('../../assets/cards/10/ten of diamonds.png'),
    }, {
        card: "10♣",
        value: 10,
        image: require('../../assets/cards/10/ten of clubs.png'),
    },
    {
        card: "10♡",
        value: 10,
        image: require('../../assets/cards/10/ten of hearts.png'),
    },
    {
        card: "J♠",
        value: 10,
        image: require('../../assets/cards/J/jack of spades.png'),
    },
    {
        card: "J♦",
        value: 10,
        image: require('../../assets/cards/J/jack of diamonds.png'),
    }, {
        card: "J♣",
        value: 10,
        image: require('../../assets/cards/J/jack of clubs.png'),
    },
    {
        card: "J♡",
        value: 10,
        image: require('../../assets/cards/J/jack of hearts.png'),
    },
    {
        card: "Q♠",
        value: 10,
        image: require('../../assets/cards/Q/queen of spades.png'),
    },
    {
        card: "Q♦",
        value: 10,
        image: require('../../assets/cards/Q/queen of diamonds.png'),
    }, {
        card: "Q♣",
        value: 10,
        image: require('../../assets/cards/Q/queen of clubs.png'),
    },
    {
        card: "Q♡",
        value: 10,
        image: require('../../assets/cards/Q/queen of hearts.png'),
    },
    {
        card: "K♠",
        value: 10,
        image: require('../../assets/cards/K/king of spades.png'),
    },
    {
        card: "K♦",
        value: 10,
        image: require('../../assets/cards/K/king of diamonds.png'),
    }, {
        card: "K♣",
        value: 10,
        image: require('../../assets/cards/K/king of clubs.png'),
    },
    {
        card: "K♡",
        value: 10,
        image: require('../../assets/cards/K/king of hearts.png'),
    },
    {
        card: "A♠",
        value: 1,
        image: require('../../assets/cards/A/Ace of Spades.png'),
    },
    {
        card: "A♦",
        value: 1,
        image: require('../../assets/cards/A/ace of diamonds.png'),
    }, {
        card: "A♣",
        value: 1,
        image: require('../../assets/cards/A/ace of clubs.png'),
    },
    {
        card: "A♡",
        value: 1,
        image: require('../../assets/cards/A/ace of hearts.png'),
    },
]

const cardDeckSlice = createSlice({
    name: 'cardDeck',
    initialState,
    reducers: {}
});

export const getCardDeck = (state) => state.cardDeck;
export default cardDeckSlice.reducer;