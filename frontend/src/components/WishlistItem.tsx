import React from "react";

import type { WishlistItemData } from "@wishlist/common";
import type { WishlistMode } from "../App";

interface WishlistItemProps extends WishlistItemData {
  mode: WishlistMode;
}

const WishlistItem: React.FC<WishlistItemProps> = ({ mode, name, link, price, bought, received }) => {
  return (
    <div className="card bg-base-100 shadow-md p-4 mb-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>
        <div className="flex-shrink-0">
          <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
            View Item
          </a>
        </div>
        <div className="flex-shrink-0 text-right">
          <span className="text-lg font-bold text-primary">${price.toFixed(2)}</span>
        </div>
        {mode === "gifter" && (
          <div className="flex-shrink-0 text-right">
            <span className="text-lg font-bold">Bought? {bought ? "Yes" : "No"}</span>
          </div>
        )}
        {mode === "owner" && (
          <div className="flex-shrink-0 text-right">
            <span className="text-lg font-bold">Received? {received ? "Yes" : "No"}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistItem;
