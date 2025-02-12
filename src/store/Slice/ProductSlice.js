import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: JSON.parse(localStorage.getItem('products')) || [],
    index : 0,
  };



export const ProductSlice =  createSlice({
    name: 'Products',
    initialState : initialState,
    reducers:{
      selectIndex: (state,action) =>{
        state.index = action.payload;
      },
        addProduct: (state, action) => {
            state.products.push(action.payload);
            localStorage.setItem('products', JSON.stringify(state.products));
          },
          deleteProduct: (state, action) => {
            state.products = state.products.filter(
            product => product.id !== action.payload
            );
            localStorage.setItem('products', JSON.stringify(state.products));
          },
          updateProduct: (state, action) => {
            const index = state.products.findIndex(
              product => product.id === action.payload.id,
              product => product.image === action.payload.image,
              product => product.name === action.payload.name,
              product => product.price === action.payload.price,
              product => product.detail === action.payload.detail,
            );
            if (index !== -1) {
              state.products[index] = action.payload;
              localStorage.setItem('products', JSON.stringify(state.products));
            }
            
    }   ,
    clearData: (state) => {
      // ล้างข้อมูลทั้ง products และ index
      // state.products = [];
      state.index = null;
      // localStorage.removeItem('products');
    },
}
})

export const {selectIndex, addProduct, deleteProduct, updateProduct,clearData } = ProductSlice.actions;
export default ProductSlice.reducer;