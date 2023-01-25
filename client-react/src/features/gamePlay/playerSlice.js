import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chipFive: 25,//da slojim nachalna broika
    chipTen: 20,//da slojim nachalna broika
    chipTwenty: 15,//da slojim nachalna broika
    chipFifty: 10,//da slojim nachalna broika
    chipHundred: 5,//da slojim nachalna broika
}

export const playerChipsSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        chipFive: (state) => {
            if (state.chipFive === 0) { return }
            state.chipFive -= 1;
        },
        chipTen: (state) => {
            if (state.chipTen === 0) { return }
            state.chipTen -= 1;
        },
        chipTwenty: (state) => {
            if (state.chipTwenty === 0) { return }
            state.chipTwenty -= 1;
        },
        chipFifty: (state) => {
            if (state.chipFifty === 0) { return }
            state.chipFifty -= 1;
        },
        chipHundred: (state) => {
            if (state.chipHundred === 0) { return }
            state.chipHundred -= 1;
        }
    }
});

export const { chipFive, chipTen, chipTwenty, chipFifty, chipHundred } = playerChipsSlice.actions;
export default playerChipsSlice.reducer;