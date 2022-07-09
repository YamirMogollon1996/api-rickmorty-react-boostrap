import { configureStore } from "@reduxjs/toolkit"
import { productosslice } from "../slices/product/product"

export const Mystore =  configureStore({
    reducer : {
        usuarios: productosslice.reducer
    }



})


