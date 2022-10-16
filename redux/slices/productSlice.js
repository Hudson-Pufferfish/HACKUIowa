import { createSlice } from '@reduxjs/toolkit'

const product = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        getProduct(state, action) {
            state.push(action.payload)
        }
    }
})