import React from "react";

import type { WishlistItemData } from "@wishlist/common";
import type { WishlistData, WishlistMode } from "../App";
import WishlistItem from "./WishlistItem";

interface WishlistProps {
  name: string;
  mode: WishlistMode;
  items: WishlistItemData[];
  onSaveWishlist: (updatedWishlist: WishlistData) => Promise<void>;
}

const Wishlist: React.FC<WishlistProps> = ({ name, mode, items, onSaveWishlist }) => {
  const updateItem = async (index: number, updatedItem: WishlistItemData) => {
    const updatedItems = [...items];
    updatedItems[index] = updatedItem;

    const updatedWishlist: WishlistData = {
      name,
      items: updatedItems,
    };

    await onSaveWishlist(updatedWishlist);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-3xl font-bold text-base-content mb-6">{name}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Link</th>
              <th>Price</th>
              {mode === "gifter" && <th className="text-center">Bought</th>}
              {mode === "owner" && <th className="text-center">Received</th>}
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <WishlistItem
                key={index}
                mode={mode}
                name={item.name}
                link={item.link}
                price={item.price}
                bought={item.bought}
                received={item.received}
                onUpdate={(updatedItem) => updateItem(index, updatedItem)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
