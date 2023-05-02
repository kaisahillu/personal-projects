import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/product";
import { RootState } from "./ProductStore";


export const productSlice=createSlice({
    name:"product",
    initialState:{
        products: [] as Product[],
        selectedCategory: {} as string,
        selectedPrice: {} as number,
        selectedProduct: {} as Product
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
        setSelectedProduct: (state, action) => {
            state.selectedProduct=action.payload;
            console.log("Selected product: ", action.payload);
        }
    }

});

export const {
    setProducts: setProducts,
    setSelectedCategory: setSelectedCategory,
    setSelectedPrice: setSelectedPrice,
    setSelectedProduct: setSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;

export const selectSelectedProduct= (state: RootState) => state.productReducer.selectedProduct;
export const selectSelectedCat= (state: RootState) => state.productReducer.selectedCategory;
export const selectSelectedPrice= (state: RootState) => state.productReducer.selectedPrice;
