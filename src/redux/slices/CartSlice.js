import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    itemCount: 0,
    total: 0,
    items: [],
}

export const CartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.itemCount += 1;
        },

        removeItem: (state, action) => {
            const prdId = action.payload;
            state.items = state.items.filter((item) => item.id !== prdId);
            state.itemCount -= 1;
        },

        calTotalAmt: (state) => {
            state.total = state.items.reduce((acc, item) => acc + item.price, 0).toFixed(2);
        },

        clearCart: (state) => {
            // state.itemCount = 0,
            //     state.items = [],
            //     state.total = 0
            return state = {
                itemCount: 0,
                total: 0,
                items: []
            }
        }
    }
})


export const { addItem, removeItem, calTotalAmt, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

