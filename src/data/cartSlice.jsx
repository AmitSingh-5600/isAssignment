import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProductIds: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartProductIds = [action.payload, ...state.cartProductIds];
    },
    removeFromCart: (state, action) => {
      const indexOdID = state.cartProductIds.indexOf(action.payload);
      state.cartProductIds.splice(indexOdID, 1);
    },

    clearAllItems: (state) => (state.cartProductIds = []),
  },
});

export default cartSlice;
