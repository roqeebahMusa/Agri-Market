import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const features = createSlice({
    name: "agri-market",
    initialState,
    reducers: {
          clearCart: (state) => {
        state.cart = [];
        state.total = 0;
        state.amount = 0;
    },
    }

  

});

export const {clearCart} = features.actions
export default features.reducer