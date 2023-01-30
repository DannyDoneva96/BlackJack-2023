import { configureStore } from "@reduxjs/toolkit";
import chipsReducer from "../features/gamePlay/playerSlice";
import cardDeckReducer from "../features/cardDeck/cardDeckSlice";

export const store = configureStore({
    reducer: {
        playerChipAdd: chipsReducer,
        cardDeck: cardDeckReducer,
    }
});