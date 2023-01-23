import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //TODO:
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        playNow: (state) => {
            //TODO
        }
    }
});

// export const {/*PUT THE NAMES OF THE REDUCERS*/} = menuSlice.actions/....
export default menuSlice.reducer;