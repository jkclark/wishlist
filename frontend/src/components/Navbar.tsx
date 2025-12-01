import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Wishlist</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-primary">new wishlist</button>
      </div>
    </div>
  );
};

export default Navbar;
