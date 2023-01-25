import { configureStore } from "@reduxjs/toolkit";
import { chipsReducer } from "../features/gamePlay/playerSlice";

export const store = configureStore({
    reducer: {
        playerChipAdd: chipsReducer,
    }
});