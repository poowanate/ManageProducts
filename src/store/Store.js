import { configureStore } from "@reduxjs/toolkit"
import UserSlice from "./Slice/UserSlice"
import DarkModeSlice from "./Slice/DarkModeSlice"
import ProductSlice from "./Slice/ProductSlice"

export const Store = configureStore({
    reducer:{
        UserStore : UserSlice,
        DarkMode : DarkModeSlice,
        Products : ProductSlice,
       
    }
})
