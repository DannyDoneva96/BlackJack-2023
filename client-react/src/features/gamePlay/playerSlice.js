import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chipFive: 0,
    chipTen: 0,
    chipTwenty: 0,
    chipFifty: 0,
    chipHundred: 0,
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
        },
        chipTenAdd: (state) => {
            state.chipFive += 10;
            state.chipTen += 10;
            state.chipTwenty += 10;
            state.chipFifty += 10;
            state.chipHundred += 10;
        },
        chipTwentyAdd: (state) => {
            state.chipFive += 20;
            state.chipTen += 20;
            state.chipTwenty += 20;
            state.chipFifty += 20;
            state.chipHundred += 20;
        },
        chipFiftyAdd: (state) => {
            state.chipFive += 50;
            state.chipTen += 50;
            state.chipTwenty += 50;
            state.chipFifty += 50;
            state.chipHundred += 50;
        },

        chipFiveRemove: (state) => {
            if (state.chipFive === 0) { return }
            state.chipFive -= 1;
        },
        chipTenRemove: (state) => {
            if (state.chipTen === 0) { return }
            state.chipTen -= 1;
        },
        chipTwentyRemove: (state) => {
            if (state.chipTwenty === 0) { return }
            state.chipTwenty -= 1;
        },
        chipFiftyRemove: (state) => {
            if (state.chipFifty === 0) { return }
            state.chipFifty -= 1;
        },
        chipHundredRemove: (state) => {
            if (state.chipHundred === 0) { return }
            state.chipHundred -= 1;
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
    chipHundredRemove } = playerChipsSliceAdd.actions;

export const chipsReducer = playerChipsSliceAdd.reducer;