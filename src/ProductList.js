import React from "react";

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} alt={item.title} />

          <h3>{item.title.slice(0, 40)}...</h3>

          <p>₹ {item.price}</p>
           <button className="cart-add-btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
