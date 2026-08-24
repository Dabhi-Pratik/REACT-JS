import React from "react";
import { useSelector } from "react-redux";

const InventoryStock = () => {
  const products = useSelector((state) => state.inventory.products);

  const valuation = products.reduce((acc, curr) => {
    return (acc += curr.price * curr.qty);
  }, 0);

  const highStock = products.filter((p) => p.qty > 10).length;

  const lowStock = products.filter((p) => p.qty <= 10).length;

  return (
    <>
      <h1>Total Products:- {products.length}</h1>
      <br />
      <h1>Total Valuation:- {valuation}</h1>
      <br />
      <h1>High Stock :- {highStock}</h1>
      <br />
      <h1>Low Stock :- {lowStock}</h1>
    </>
  );
};

export default InventoryStock;
