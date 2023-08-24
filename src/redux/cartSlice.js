import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { serverURL } from '../../serverURL';
import axios from 'axios';

const initialState = {
    msg: "",
    data: "",
    loading: "",
    error: ""
}
export const getCart = createAsyncThunk('userCart', async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios.get(`${serverURL}/api/user/get-carts`,config)
        return res.data
    }
    catch (err) {
        return err
    }
})

export const cartSlice = createSlice( {
    name:"cartSlice",
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
           return state.filter((item)=> item.id !== action.payload)
        }
    }
})

export const userCartSlice = createSlice({
    name:"userCartSlice",
    initialState,
    reducers:"",
    extraReducers: {
        [getCart.pending]:(state, action) => {
            state.loading = true
        },
        [getCart.fulfilled]:(state, payload) =>{
            if (payload.message) {
                state.error = payload.message;
                state.loading = true;
                // toast.error(payload.message)
            }
            else {
                state.loading = false;
                state.msg = payload.payload.msg
                state.data = payload.payload.result.cartData;
            }
        },
        [getCart.rejected]: (state, action) =>{
            state.loading = false
        }
    }
})
export const {add , remove} = cartSlice.actions;
export const cart = cartSlice.reducer
export const userCart = userCartSlice.reducer