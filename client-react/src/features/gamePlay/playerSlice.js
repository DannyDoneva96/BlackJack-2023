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
            state.chipFive -= 1;
        },
        chipTen: (state) => {
            state.chipTen -= 1;
        },
        chipTwenty: (state) => {
            state.chipTwenty -= 1;
        },
        chipFifty: (state) => {
            state.chipFifty -= 1;
        },
        chipHundred: (state) => {
            state.chipHundred -= 1;
        }
    }
});

export const { chipFive, chipTen, chipTwenty, chipFifty, chipHundred } = playerChipsSlice.actions;
export default playerChipsSlice.reducer;