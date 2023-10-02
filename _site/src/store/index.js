import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './slice/cart'

export default configureStore({
    reducer:{
        cart: cartSlice
    },
}) 