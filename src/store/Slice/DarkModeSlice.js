import { createSlice } from '@reduxjs/toolkit'

const savedTheme = localStorage.getItem('theme');
const initialTheme = savedTheme === 'dark' ? 'dark' : 'light';



export const DarkModeSlice =  createSlice({
    name: 'DarkMode',
    initialState : {
        theme: initialTheme,
    },
    reducers:{
        toggleTheme: (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.theme); // บันทึกสถานะลงใน Local Storage
          },
    }
})

export const { toggleTheme } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;