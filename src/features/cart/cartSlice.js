// redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Mảng các sản phẩm trong giỏ hàng
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;

      // Đảm bảo item có quantity
      if (!newItem.quantity) newItem.quantity = 1;

      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Nếu đã có sản phẩm, tăng số lượng
        existingItem.quantity += newItem.quantity;
      } else {
        // Nếu chưa có, thêm vào với quantity mặc định là 1
        state.items.push({ ...newItem });
      }
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
