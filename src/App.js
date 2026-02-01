import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./Navbar";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import Footer from "./Footer";


import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch Products 
  useEffect(() => {
    async function fetchProducts() {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    }
    fetchProducts();
  }, []);

  //post function
  const addNewProduct = (product) => {
    setProducts([product, ...products]);
  };

  //filter the products
  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Product Section */}
      <div className="main-section">
        <h1>"Your All-in-One Shopping Destination."</h1>
        <ProductList products={filteredProducts} />
      </div>

      {/*Add Product Section */}
      <div className="add-section" id="add-product-section">
  <AddProductForm onProductAdd={addNewProduct} />
</div>
        <Footer/>
    </div>
  );
}

export default App;
