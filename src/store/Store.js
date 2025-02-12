import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./Slice/UserSlice"
import DarkModeSlice from "./Slice/DarkModeSlice"


export const Store = configureStore({
    reducer:{
        UserStore : UserSlice,
        DarkMode : DarkModeSlice
       
    }
})
