import React from "react";
import Counter from "./concept/Counter";
import Add from "./components/Add";
import ProductsList from "./components/ProductsList";
import InventoryStock from "./components/inventoryStock";

const App = () => {
  return (
    <>
      {/* <Counter /> */}

      <InventoryStock />

      <br />
      <br />

      <Add />

      <br />
      <br />

      <ProductsList />
    </>
  );
};

export default App;
