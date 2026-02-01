import React, { useState } from "react";
import axios from "axios";

function AddProductForm({ onProductAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price,
      description: "New Product Added",
      category: "electronics",
      image: "https://i.pravatar.cc",
    };

    const res = await axios.post(
      "https://fakestoreapi.com/products",
      newProduct
    );

    onProductAdd(res.data);

    setTitle("");
    setPrice("");
  };

  return (
    <div className="form-box">
      <h2>➕ Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          placeholder="Enter Product Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
