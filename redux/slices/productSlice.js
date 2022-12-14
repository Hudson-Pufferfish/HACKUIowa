import { NavigationHelpersContext } from '@react-navigation/core';
import { createSlice } from '@reduxjs/toolkit'
import { fetchProductInfo } from '../asyncThunk/productAsyncThunk'


const product = createSlice({
    name: 'product',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
            if (action.payload && !state.find(product => (product.barcode === action.payload.barcode))) {
                state.push(action.payload);
            } 
        })
        builder.addCase(fetchProductInfo.rejected, (state, action) => {
            alert("Product unavailable.");
            return state;
        })
    },
})

export default product.reducer;