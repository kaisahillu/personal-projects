import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";


export const productSlice=createSlice({
    name:"product",
    initialState:{
        products: [] as Product[],
        selectedCategory: {} as string,
        selectedPrice: {} as number | null
    },

    reducers:{
        setProducts: (state, action) => {
            state.products = action.payload;
            console.log("Products in store: ", state.products);
        },
        setSelectedCategory: (state, action) => {
           state.selectedCategory = action.payload;
           console.log("Selected category: ", action.payload);
        },
        setSelectedPrice: (state, action) => {
            state.selectedPrice = action.payload;
            console.log("Selected price: ", action.payload);
        },
    }

});

export const {
    setProducts: setProducts,
    setSelectedCategory: setSelectedCategory,
    setSelectedPrice: setSelectedPrice
} = productSlice.actions;

export default productSlice.reducer;
