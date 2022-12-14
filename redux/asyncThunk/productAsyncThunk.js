import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import uuid from 'react-native-uuid';
import data from './product.js'
// export const fetchProductInfo = createAsyncThunk(
//     'product/fetchByBarCode',
//     async (productBarCode, thunkAPIs) => {
//         await axios({
//             method: 'GET',
//             url: 'https://barcode-lookup.p.rapidapi.com/v3/products',
//             params: {barcode: productBarCode},
//             headers: {
//                 'X-RapidAPI-Key': '48ffbb5cb5mshe7d78491933dec9p1b0bc7jsn85439d123583',
//                 'X-RapidAPI-Host': 'barcode-lookup.p.rapidapi.com'
//             }
//         }).then((res) => {
//             const data = res.data.products[0];
//             return {
//                 id: uuid.v4(),
//                 image: data.images,
//                 barcode: data.barcode_number,
//                 name: data.title,
//                 category: data.category,
//                 carbon: carbonCalculator(data.category), 
//             };
//         });
//     }
// )

// const carbonCalculator = (category) => {
//     const data = category.toLowerCase();
//     switch(true) {
//         case data.includes('snack'):
//             return 150
//         case data.includes('beverages'):
//             return 205
//         case data.includes('eggs'):
//             return 2000
//         case data.includes('meat'):
//             return 20000
//         case data.includes('vegetables'):
//             return 1000
//         case data.includes('oil'):
//             return 1200
//         default: 
//             return 'NA'
//     }
// }

export const fetchProductInfo = createAsyncThunk(
    'product/fetchByBarCode',
    (productBarCode, thunkAPIs) => {
        try {
            const res = data.find(prod => {
                return prod.barcode == productBarCode
            });
            return res;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
)