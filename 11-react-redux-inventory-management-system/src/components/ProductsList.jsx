import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete, setEditValue } from "../features/inventorySlice";

const ProductsList = () => {
  const products = useSelector((state) => state.inventory.products);

  const dispatch = useDispatch();

  const [productQuery, setProductQuery] = useState({
    search: "",
    sort: "asc",
  });

  const handleChange = (field, e) => {
    setProductQuery((prod) => {
      return {
        ...prod,
        [field]: e.target.value,
      };
    });
  };

  const filterList = products.filter((p) =>
    p.name.toLowerCase().includes(productQuery.search.toLowerCase()),
  );

  const sortList = [...filterList].sort((a, b) => {
    if (productQuery.sort === "asc") {
      return a.id - b.id;
    }

    if (productQuery.sort === "dsc") {
      return b.id - a.id;
    }

    if (productQuery.sort === "priceAsc") {
      return Number(a.price) - Number(b.price);
    }

    if (productQuery.sort === "priceDsc") {
      return Number(b.price) - Number(a.price);
    }

    if (productQuery.sort === "qtyAsc") {
      return Number(a.qty) - Number(b.qty);
    }

    if (productQuery.sort === "qtyDsc") {
      return Number(b.qty) - Number(a.qty);
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        value={productQuery.search}
        onChange={(e) => handleChange("search", e)}
      />
      <select
        value={productQuery.sort}
        onChange={(e) => handleChange("sort", e)}
      >
        <option value="asc">Ascending</option>
        <option value="dsc">Descending</option>
        <option value="priceAsc">Price Ascending</option>
        <option value="priceDsc">Price Descending</option>
        <option value="qtyAsc">Qty Ascending</option>
        <option value="qtyDsc">Qty Descending</option>
      </select>

      <br />
      <br />

      {sortList.length > 0 ? (
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Category</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortList.map((p, index) => {
              return (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.qty}</td>
                  <td>{p.price}</td>
                  <td>{p.category}</td>
                  <td>
                    <button onClick={() => dispatch(setEditValue(p.id))}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button onClick={() => dispatch(handleDelete(p.id))}>
                      {" "}
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h1>No Products Data found</h1>
      )}
    </>
  );
};

export default ProductsList;
