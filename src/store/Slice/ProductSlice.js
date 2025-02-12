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
              product => product.id === action.payload.id
            );
            if (index !== -1) {
              state.products[index] = action.payload;
              localStorage.setItem('products', JSON.stringify(state.products));
            }
    }   
}
})

export const {selectIndex, addProduct, deleteProduct, updateProduct } = ProductSlice.actions;
export default ProductSlice.reducer;