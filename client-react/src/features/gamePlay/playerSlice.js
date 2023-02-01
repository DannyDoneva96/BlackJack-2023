import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    chipFive: 0,
    chipTen: 0,
    chipTwenty: 0,
    chipFifty: 0,
    chipHundred: 0,
    hasChips: false,
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
        },
        chipTenRemove: (state) => {
            if (state.chipTen === 0) return
            state.bet.push(require('../../assets/chips/grey-chip – Копие.png'))
            state.chipTen -= 1;
        },
        chipTwentyRemove: (state) => {
            if (state.chipTwenty === 0) return
            state.bet.push(require('../../assets/chips/green-chip – Копие.png'))
            state.chipTwenty -= 1;
        },
        chipFiftyRemove: (state) => {
            if (state.chipFifty === 0) return
            state.bet.push(require('../../assets/chips/red-chip-removebg-preview – Копие.png'))
            state.chipFifty -= 1;
        },
        chipHundredRemove: (state) => {
            if (state.chipHundred === 0) return
            state.bet.push(require('../../assets/chips/purple-chip – Копие.png'))
            state.chipHundred -= 1;
        },
        LastOneRemove: (state) => {

            let last = state.bet.pop()
            if (last === 5) {
                state.chipFive += 1
            } else if (last === 10) {
                state.chipTen += 1
            } else if (last === 20) {
                state.chipTwenty += 1
            } else if (last === 50) {
                state.chipFifty += 1
            } else if (last === 100) { state.chipHundred += 1 }
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
    LastOneRemove ,
    } = playerChipsSliceAdd.actions;

export const playerChips = (state) => state.playerChipAdd;
export default playerChipsSliceAdd.reducer;