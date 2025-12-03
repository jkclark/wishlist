import React, { useState } from "react";

interface NewOrLoadMenuProps {
  onCreateWishlist: (name: string) => void;
  onLoadWishlist: (id: string) => void;
}

const NewOrLoadMenu: React.FC<NewOrLoadMenuProps> = ({ onCreateWishlist, onLoadWishlist }) => {
  const [wishlistName, setWishlistName] = useState("");
  const [wishlistId, setWishlistId] = useState("");

  const handleCreate = () => {
    if (wishlistName.trim()) {
      onCreateWishlist(wishlistName.trim());
    }
  };

  const handleLoad = () => {
    if (wishlistId.trim()) {
      onLoadWishlist(wishlistId.trim());
    }
  };

  return (
    <div className="max-w-2xl w-full mx-auto p-3 space-y-4">
      {/* New Wishlist Section */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Create New Wishlist</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Wishlist name:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={wishlistName}
              onChange={(e) => setWishlistName(e.target.value)}
              placeholder="My Birthday Wishlist"
            />
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary" onClick={handleCreate} disabled={!wishlistName.trim()}>
              Create
            </button>
          </div>
        </div>
      </div>

      {/* Load Wishlist Section */}
      <div className="card bg-base-200 shadow-md">
        <div className="card-body">
          <h2 className="card-title text-xl mb-4">Load Existing Wishlist</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Wishlist ID:</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={wishlistId}
              onChange={(e) => setWishlistId(e.target.value)}
              placeholder="Enter wishlist ID or URL"
            />
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-secondary" onClick={handleLoad} disabled={!wishlistId.trim()}>
              Load
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrLoadMenu;
