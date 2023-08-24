import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {serverURL} from '../../serverURL';
import { toast } from "react-hot-toast";
import axios from 'axios';
const initialState = {
    userToken: "",
    user: "",
    loading: false,
    error: ""
}

export const isLogin = createAsyncThunk('loginAdmin', async (token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
    try {
        const res = await axios.get(`${serverURL}/api/user/profile`,config)
        return res.data
    }
    catch (err) {
        return err
    }
})

const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem('userToken')
        },
        // add: (state, action) => {
        //     state.admin = localStorage.getItem('admin')
        // }
    },
    extraReducers: {
        [isLogin.pending]: (state, action) => {
            state.loading = true
        },
        [isLogin.fulfilled]: (state, { payload }) => {
            console.log('payload',payload)
            if (payload.message) {
                state.error = payload.message;
                state.loading = true;
                // toast.error(payload.message)
            }
            else {
                state.error = ""
                state.loading = false;
                state.user = payload.result;
                // toast.success("LogIn Success.")
            }
        },
        [isLogin.rejected]: (state, action) => {
            state.loading = false
        }
    }
});
export const { addToken } = authSlice.actions;
export default authSlice.reducer;