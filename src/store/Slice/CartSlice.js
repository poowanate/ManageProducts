import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // เก็บรายการสินค้าในตะกร้า
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // เพิ่มสินค้าลงในตะกร้า
      const item = action.payload;
      const existingItem  = state.items.find(i => i.id === item.id    );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      // ลบสินค้าจากตะกร้า
      const itemId = action.payload;
      state.items = state.items.filter(item => item.id !== itemId);
    },
    updatePlusQuantity: (state, action) => {
      // อัปเดตจำนวนสินค้าที่มีในตะกร้า
      const { id, quantity } = action.payload;
      const existingItem  = state.items.find(item => item.id === id);
      if (existingItem ) {
        existingItem.quantity = quantity+1;
      }
    },
    updateDeQuantity: (state, action) => {
      // อัปเดตจำนวนสินค้าที่มีในตะกร้า
      const { id, quantity } = action.payload;
      const existingItem  = state.items.find(item => item.id === id);
      // console.log(quantity)
      if (existingItem && quantity>1 ) {
        existingItem.quantity = quantity-1;
      }
      else{
        state.items = state.items.filter(item => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, updatePlusQuantity, updateDeQuantity } = cartSlice.actions;
export default cartSlice.reducer;