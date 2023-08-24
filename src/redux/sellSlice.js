import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const sellSlice = createSlice( {
    name:"cartSlice",
    initialState:[],
    reducers:{
        addForSell(state, action){
            state.push(action.payload)
        },
        removeFromSell(state, action){
            
        //    return state.filter((item)=> item.id !== action.payload)
        return []
        }
    }
})

export const {addForSell , removeFromSell} = sellSlice.actions;
export default sellSlice.reducer