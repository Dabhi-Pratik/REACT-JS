import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, handleEdit } from "../features/inventorySlice";

const Add = () => {
  const products = useSelector((state) => state.inventory.products);

  const editValue = useSelector((state) => state.inventory.editValue);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    qty: 0,
    price: 0,
    category: "",
  });

  const handleChange = (field, e) => {
    setInput((prev) => {
      return {
        ...prev,
        [field]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editValue) {
      dispatch(handleEdit(input));
      setInput({ name: "", qty: 0, price: 0, category: "" });
    } else {
      dispatch(add(input));
      setInput({ name: "", qty: 0, price: 0, category: "" });
    }
  };

  useEffect(() => {
    editValue ? setInput(editValue) : null;
  }, [editValue]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={input.name}
          placeholder="Enter Name"
          onChange={(e) => handleChange("name", e)}
        />
        <br />
        <br />
        <label htmlFor="qty">Qty:</label>
        <input
          type="number"
          value={input.qty}
          placeholder="Enter Qty"
          onChange={(e) => handleChange("qty", e)}
        />
        <br />
        <br />
        <label htmlFor="qty">Price:</label>
        <input
          type="number"
          value={input.price}
          placeholder="Enter price"
          onChange={(e) => handleChange("price", e)}
        />
        <br />
        <br />
        <label htmlFor="category">category</label>
        <input
          type="text"
          placeholder="enter product category"
          value={input.category}
          onChange={(e) => handleChange("category", e)}
        />

        <br />
        <br />

        <button type="submit">{editValue ? "update" : "add"}</button>
      </form>
    </>
  );
};

export default Add;
