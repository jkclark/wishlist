import React from "react";

import type { WishlistData, WishlistMode } from "../App";
import WishlistItem from "./WishlistItem";

interface WishlistProps extends WishlistData {
  mode: WishlistMode;
}

const Wishlist: React.FC<WishlistProps> = ({ name, mode, items }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <h2 className="text-3xl font-bold text-base-content mb-6">{name}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <WishlistItem
            key={index}
            mode={mode}
            name={item.name}
            link={item.link}
            price={item.price}
            bought={item.bought}
            received={item.received}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
