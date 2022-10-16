import { createSlice } from '@reduxjs/toolkit'
import { fetchProductInfo } from '../asyncThunk/productAsyncThunk'


const product = createSlice({
    name: 'product',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        // builder.addCase(fetchProductInfo.rejected, (action) => {})
        builder.addCase(fetchProductInfo.fulfilled, (state, action) => {
            state.push(action.payload);
        })
    },
})

export default product.reducer;