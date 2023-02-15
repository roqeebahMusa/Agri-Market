import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    total: 0,
}

const features = createSlice({
    name: "agri-market",
    initialState,
    reducers: {

    addToCart: ({payload}) => {
        const check = state.cart.findIndex((hen) => hen.id === payload.hen);
        if(check >= 0){
            cart[check].QTY += 1;
        } else {
            const hen ={...payload, QTY : 1};
            cart.push(hen);
        }
    }
    }
    

  

});

export const {addToCart} = features.actions
export default features.reducer