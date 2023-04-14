import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const url = "https://fakestoreapi.com/products";

const initialState = {
    isLoading: false,
    products: []
}

// using axios() :- for this 404 is not error,  it doesnt' handle 404 error
// export const getProducts = createAsyncThunk('product/getProducts',
//     async () => {
//         try {
//             const res = await fetch(url);
//             return await res.json();
//         } catch (e) {
//             return console.log("Error occurred in fetching products");
//         }
//     }
// )


// using axios() :- it handle 404 error
export const getProducts = createAsyncThunk('product/getProducts',
    // async (params, thunkAPI) => {
    async () => {
        try {
            const res = await axios(url);
            // console.log(res);
            // console.log(params);
            // console.log(thunkAPI)
            // console.log(thunkAPI.getState())
            return res.data;
        } catch (e) {
            return console.log("Error occurred in fetching products");
        }
    }
)

export const ProductSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {
        changeLoading: (state) => {
            state.isLoading = !state.isLoading;
        }
    },

    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            // console.log(action)
            state.isLoading = false;
            state.products = action.payload
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});


export const { changeLoading } = ProductSlice.actions
export default ProductSlice.reducer



