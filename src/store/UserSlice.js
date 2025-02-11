import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    value : "hellow word",
    User : [],
    Loading : false
}

export const UserSlice =  createSlice({
    name: 'UserStore',
    initialState,
    reducers:{
            Login:(state,actions)=>{
                state.value = 'login law';
                state.User = actions.payload;
                state.Loading = !state.Loading;
            },
            Logout:(state)=>{
                state.value = "logout success"
            }
    }
})

export const { Login,Logout } = UserSlice.actions;
export default UserSlice.reducer;