import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";

export const store = configureStore({
    reducer: {
        mainMenu: menuReducer
    }
});