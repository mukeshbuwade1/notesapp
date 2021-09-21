import React from 'react';
import logo from "./Capturef-removebg-preview.png"

function Navbar() {
  return (
    <>
      <div className="nav_body">
        <img src={logo} alt="logo" />
        <div className="logo">Mukesh Buwade</div>
      </div>
    </>
    
  );
}

export default Navbar;