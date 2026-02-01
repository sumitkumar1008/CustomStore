import React from "react";

function Navbar({ searchTerm, setSearchTerm }) {
  return (
    <nav className="navbar">
      {/*logo */}
      <div className="logo-section">
        <img src="/logo192.png" alt="CustomStore Logo" className="store-logo" />
      </div>

      {/* Search Bar */}
      <input
        id="search-bar-css"
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/*Links + Buttons */}
      <div className="nav-right">
        {/* Links */}
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/*Add Product Button */}
        <button
          className="add-btn"
          onClick={() => {
            document
              .getElementById("add-product-section")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          Add Product
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
