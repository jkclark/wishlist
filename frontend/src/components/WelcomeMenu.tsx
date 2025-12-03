import React from "react";
import NewOrLoadMenu from "./NewOrLoadMenu";

interface WelcomeMenuProps {
  onCreateWishlist: (name: string) => void;
  onLoadWishlist: (id: string) => void;
}

const WelcomeMenu: React.FC<WelcomeMenuProps> = ({ onCreateWishlist, onLoadWishlist }) => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-md mb-4">
        <h2 className="text-2xl font-bold mb-4 text-base-content">Welcome to the wishlist app</h2>
        <p className="text-base-content opacity-70">You can load an existing wishlist or create a new one.</p>
      </div>
      <NewOrLoadMenu onCreateWishlist={onCreateWishlist} onLoadWishlist={onLoadWishlist} />
    </div>
  );
};

export default WelcomeMenu;
