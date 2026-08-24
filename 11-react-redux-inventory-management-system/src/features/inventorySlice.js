import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "phone",
      qty: 1,
      price: 50000,
      category: "electronics",
    },
    {
      id: 2,
      name: "laptop",
      qty: 3,
      price: 75000,
      category: "electronics",
    },
    {
      id: 3,
      name: "headphones",
      qty: 5,
      price: 2500,
      category: "accessories",
    },
    {
      id: 4,
      name: "keyboard",
      qty: 8,
      price: 1800,
      category: "accessories",
    },
    {
      id: 5,
      name: "mouse",
      qty: 10,
      price: 900,
      category: "accessories",
    },
    {
      id: 6,
      name: "monitor",
      qty: 4,
      price: 15000,
      category: "electronics",
    },
  ],
  editValue: null,
};

const inventorySlice = createSlice({
  name: "inventory",

  initialState,

  reducers: {
    // ADD PRODUCT
    add: (state, action) => {
      const newProduct = {
        id: new Date().getTime(),
        name: action.payload.name,
        qty: action.payload.qty,
        price: action.payload.price,
        category: action.payload.category,
      };

      state.products.push(newProduct);
    },

    // DELETE PRODUCT
    handleDelete: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },

    // SET PRODUCT FOR EDIT
    setEditValue: (state, action) => {
      state.editValue = state.products.find((p) => p.id === action.payload);
    },

    // EDIT PRODUCT
    handleEdit: (state, action) => {
      const productIndex = state.products.findIndex(
        (p) => p.id === state.editValue.id,
      );

      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...action.payload,
          id: state.editValue.id,
        };
      }

      state.editValue = null;
    },
  },
});

export const { add, handleDelete, setEditValue, handleEdit } =
  inventorySlice.actions;

export default inventorySlice.reducer;
