import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/gamePlay/playerSlice";

export const store = configureStore({
    reducer: {
        playerChipCounter: playerReducer
    }
});