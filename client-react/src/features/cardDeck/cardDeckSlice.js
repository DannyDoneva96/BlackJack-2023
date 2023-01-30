import { createSlice } from "@reduxjs/toolkit";
import twoSpades from '../../assets/cards/2/two of spades.png'

const initialState = [
    {
        card: "2♠",
        value: 2,
       
    }, {
        card: "2♦",
        value: 2
    }, {
        card: "2♣",
        value: 2
    }, {
        card: "2♡",
        value: 2
    },
    {
        card: "3♠",
        value: 3
    }, 
    {
        card: "3♦",
        value: 3
    },
    {
        card: "3♣",
        value: 3
    },
    {
        card: "3♡",
        value: 3
    },
    {
        card: "4♠",
        value: 4
    },
    {
        card: "4♦",
        value: 4
    },
    {
        card: "4♣",
        value: 4
    },
    {
        card: "4♡",
        value: 4
    }, {
        card: "5♠",
        value: 5
    },
    {
        card: "5♦",
        value: 5
    }, {
        card: "5♣",
        value: 5
    },
    {
        card: "5♡",
        value: 5
    }, 
    {
        card: "6♠",
        value: 6
    },
    {
        card: "6♦",
        value: 6
    }, {
        card: "6♣",
        value: 6
    },
    {
        card: "6♡",
        value: 6
    }, 
    {
        card: "7♠",
        value: 7
    },
    {
        card: "7♦",
        value: 7
    }, {
        card: "7♣",
        value: 7
    },
    {
        card: "7♡",
        value: 7
    }, 
    {
        card: "8♠",
        value: 8
    },
    {
        card: "8♦",
        value: 8
    }, {
        card: "8♣",
        value: 8
    },
    {
        card: "8♡",
        value: 8
    }, 
    {
        card: "9♠",
        value: 9
    },
    {
        card: "9♦",
        value: 9
    }, {
        card: "9♣",
        value: 9
    },
    {
        card: "9♡",
        value: 9
    }, 
    {
        card: "10♠",
        value: 10
    },
    {
        card: "10♦",
        value: 10
    }, {
        card: "10♣",
        value: 10
    },
    {
        card: "10♡",
        value: 10
    }, 
    {
        card: "J♠",
        value: 10
    },
    {
        card: "J♦",
        value: 10
    }, {
        card: "J♣",
        value: 10
    },
    {
        card: "J♡",
        value: 10
    }, 
    {
        card: "Q♠",
        value: 10
    },
    {
        card: "Q♦",
        value: 10
    }, {
        card: "Q♣",
        value: 10
    },
    {
        card: "Q♡",
        value: 10
    }, 
    {
        card: "K♠",
        value: 10
    },
    {
        card: "K♦",
        value: 10
    }, {
        card: "K♣",
        value: 10
    },
    {
        card: "K♡",
        value: 10
    }, 
    {
        card: "A♠",
        value: 1
    },
    {
        card: "A♦",
        value: 1
    }, {
        card: "A♣",
        value: 1
    },
    {
        card: "A♡",
        value: 1
    }, 
]

const cardDeckSlice = createSlice({
    name: 'cardDeck',
    initialState,
    reducers: {}
})