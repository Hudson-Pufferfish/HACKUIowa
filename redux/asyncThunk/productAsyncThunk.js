import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import uuid from 'react-native-uuid';

export const fetchProductInfo = createAsyncThunk(
    'product/fetchByBarCode',
    async (productBarCode) => {
        axios({
            method: 'GET',
            url: 'https://barcode-lookup.p.rapidapi.com/v3/products',
            params: {barcode: productBarCode},
            headers: {
                'X-RapidAPI-Key': '08bf2e1c4dmsh126b43cd7e37d06p103adfjsn2749397e5fd1',
                'X-RapidAPI-Host': 'barcode-lookup.p.rapidapi.com'
            }
        }).then((data) => {
            return {
                id: uuid.v4(),
                image: data.images,
                barcode: data.barcode_number,
                name: data.title,
                category: data.category,
                carbon: carbonCalculator(data.category), 
            };
        }).catch((error) => {
            alert(error);
        })
    }
)

const carbonCalculator = (category) => {
    const data = category.toLowerCase();
    switch(true) {
        case data.includes('snack'):
            return 150
        case data.includes('beverages'):
            return 205
        case data.includes('eggs'):
            return 2000
        case data.includes('meat'):
            return 20000
        case data.includes('vegetables'):
            return 1000
        case data.includes('oil'):
            return 1200
        default: 
            return 'NA'
    }
}