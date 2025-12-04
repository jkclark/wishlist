import React from "react";

interface NavbarProps {
  wishlistId?: string;
  wishlistName?: string;
  onNewLoad: () => void;
  showNavbarContents: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ wishlistId, wishlistName, onNewLoad, showNavbarContents }) => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 items-center flex gap-2">
        {showNavbarContents && wishlistName && (
          <span className="font-medium text-xl px-4">{wishlistName}</span>
        )}
        {showNavbarContents && wishlistId && (
          <span className="text-md opacity-50 text-center">ID: {wishlistId}</span>
        )}
      </div>
      {showNavbarContents && (
        <div className="flex-none">
          <button className="btn btn-primary" onClick={onNewLoad}>
            New/Load Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
