import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import inventorySlice from "../features/inventorySlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    inventory: inventorySlice,
  },
});

export default store;
