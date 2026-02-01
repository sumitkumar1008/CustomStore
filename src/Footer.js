import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo / Brand */}
        <h2 className="footer-logo">CustomStore</h2>



        {/* Copyright */}
        <p className="footer-text">
          © {new Date().getFullYear()} CustomStore. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
