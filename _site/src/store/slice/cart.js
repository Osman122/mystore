import { createSlice } from "@reduxjs/toolkit"; 

const Initial_State= {
    items:{},
    initial : 0,
    totalPrice : 0,
    
    
}

const cart = createSlice({
    name:'cart',
    initialState: Initial_State,
    reducers:{
        addToCart: (state, action) => {

              
           
                let obj = {...action.payload}
                obj.count = obj.count ? obj.count + 1 : 1
                state.items[obj.id] = obj
                 console.log("item added",obj)
        },

        removeItemFromCart: (state, action) => {
            if (state.items[action.payload].count > 1){
                state.items[action.payload].count -= 1
            } else {
                alert("Minimum quantity reached!")
            }
        },

        deleteAllFromCart: (state, action) => {
            delete state.items[action.payload]
        }
    }
});

export const {addToCart,removeItemFromCart,deleteAllFromCart} = cart.actions;
export default cart.reducer;
