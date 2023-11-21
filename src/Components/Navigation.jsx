import React from "react";

const Navigation = () => {
  return (
    <div className="navi-cising">
      <nav className="Container">
        <div className="logo">
          <img src="/imagas/brand_logo.png" alt="troble" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
