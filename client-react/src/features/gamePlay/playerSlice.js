import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chipFive: 0,
    chipTen: 0,
    chipTwenty: 0,
    chipFifty: 0,
    chipHundred: 0,
    hasChips: false,
    total: 0,
    bet: [],
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
} = playerChipsSliceAdd.actions;

export const playerChips = (state) => state.playerChipAdd;
export default playerChipsSliceAdd.reducer;