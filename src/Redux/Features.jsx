// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     products: [],
//     cart: [],
//     total : 0,
//     amount: 0,
//     user: [],

// }

// const features = createSlice({
//     name: "e-store",
//     initialState,
//     reducers: {
//         bringProducts: (state, {payload})=>{
//             state.products = payload;
//         },
//         addToCart: (state, {payload})=>{
//             const check = state.cart.findIndex((i) => i.id === payload.id);
//             if(check >= 0){
//                 state.cart[check].QTY += 1;
//             } else {
//                 const items ={...payload, QTY : 1};
//                 state.cart.push(items);
//             }
//         },
//         minusItem: (state, { payload }) =>{
//             const checkCart = state.cart.findIndex((el) => el.id === payload.id);
//             const check = state.cart[checkCart].QTY
//             if(check > 1){
//                 state.cart[checkCart].QTY -= 1
//             }else if (check === 1){
//                 const remove = state.cart.filter(el => el.id !== payload.id)
//             state.cart = remove
//             }
//         },
//         removeItem: (state, {payload})=>{
//             const remove = state.cart.filter((i)=> i.id !== payload.id);
//             state.cart = remove;
//             let total = 0;
//             let amount = 0;
//             state.cart.forEach((item) => {
//                 amount += item.QTY;
//                 total += item.QTY * item.price;
//             });
//             state.amount = amount;
//             state.total = total;
//         },
//         clearCart: (state)=>{
//             state.cart = [];
//             state.total = 0;
//             state.amount = 0
//         },

//         addUser: (state, { payload }) => {
//             state.user = [payload];
//           },

//         total: (state, {payload})=>{
//             let amount = 0;
//             let total = 0;
//             state.cart.forEach((item) => {
//                 amount += item.QTY;
//                 total += (item.QTY * item.price) * 100 ;
//             });
//             state.amount = amount;
//             state.total = (Math.floor(total))/100;
//         }
//     },
// });

// export const {bringProducts, addToCart, removeItem, clearCart, total, minusItem, addUser} = features.actions

// export default features.reducer




import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    cart: [],
    total : 0,
    amount: 0,
    user:[]
}

const features = createSlice({
    name: "e-store",
    initialState,
    reducers: {
        bringProducts: (state, {payload})=>{
            state.products = payload;
        },
       addUser: (state, {payload})=>{
            state.user =[payload];
        },
        removeUser: (state, {payload})=>{
            state.user = [];
        },
        addToCart: (state, {payload})=>{
            // console.log(payload, "payload")
            // console.log(state.cart, "state.cart")
            const check = state.cart.findIndex((i) => i._id === payload._id);
            console.log(check)
            if(check >= 0){
                state.cart[check].QTY += 1;
            } else {
                const items ={...payload, QTY : 1};
                state.cart.push(items);
            }
        },
        minusItem: (state, { payload }) =>{
            
            const checkCart = state.cart.findIndex((el) => el._id === payload._id);
            console.log(state.cart[checkCart].QTY)
            const check = state.cart[checkCart].QTY
            state.amount -= 1
            if(check > 1){
                state.cart[checkCart].QTY -= 1
            }
            else if (check === 1){
                const remove = state.cart.filter(el => el._id !== payload._id)
            console.log(remove)
            state.cart = remove
            }
        },
        removeItem: (state, {payload})=>{
            const remove = state.cart.filter((i)=> i._id !== payload._id);
            state.cart = remove;
            let total = 0;
            let amount = 0;
            state.cart.forEach((item) => {
                amount += item.QTY;
                total += item.QTY * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
        clearCart: (state)=>{
            state.cart = [];
            state.total = 0;
            state.amount = 0
        },
        total: (state, {payload})=>{
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.QTY;
                total += (item.QTY * item.price) * 100 ;
            });
            state.amount = amount;
            state.total = (Math.floor(total))/100;
        }
    },
});

export const {bringProducts, addToCart, removeItem, clearCart, total, minusItem, addUser, removeUser} = features.actions

export default features.reducer