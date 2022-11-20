import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loggedIn:false
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{}
})

export default authSlice.reducer