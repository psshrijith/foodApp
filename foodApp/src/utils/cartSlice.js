import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems:(state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if(existingItem){
                existingItem.quantity += action.payload.quantity;
            }
            else{
                state.items.push({...action.payload})
            }
        },
        removeItems: (state, action)  => {
            const existingItem = state.items.find(item => item.id === action.payload.id)
            if(existingItem){
                if(existingItem.quantity > 1)
                    existingItem.quantity -= 1
                else{
                    existingItem.quantity = 0;
                    state.items = state.items.filter(item => item.id !== action.payload.id)
                }
            }
            else {
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }
        },
        clearCart: (state) => {
            state.items = []
        }
    }
});

export const {addItems, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;