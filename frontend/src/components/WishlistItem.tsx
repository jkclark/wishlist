import React from "react";

import type { WishlistItemData } from "@wishlist/common";
import type { WishlistMode } from "../App";

interface WishlistItemProps extends WishlistItemData {
  mode: WishlistMode;
  onUpdate: (updatedItem: WishlistItemData) => Promise<void>;
}

const WishlistItem: React.FC<WishlistItemProps> = ({
  mode,
  name,
  link,
  price,
  bought,
  received,
  onUpdate,
}) => {
  const handleBoughtChange = async () => {
    const updatedItem: WishlistItemData = {
      name,
      link,
      price,
      bought: !bought,
      received,
    };
    await onUpdate(updatedItem);
  };

  const handleReceivedChange = async () => {
    const updatedItem: WishlistItemData = {
      name,
      link,
      price,
      bought,
      received: !received,
    };
    await onUpdate(updatedItem);
  };

  return (
    <tr>
      <td className="font-semibold">{name}</td>
      <td>
        <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
          View Item
        </a>
      </td>
      <td className="font-bold text-primary">${price.toFixed(2)}</td>
      {mode === "gifter" && (
        <td className="text-center">
          <input type="checkbox" checked={bought} className="checkbox" onChange={handleBoughtChange} />
        </td>
      )}
      {mode === "owner" && (
        <td className="text-center">
          <input type="checkbox" checked={received} className="checkbox" onChange={handleReceivedChange} />
        </td>
      )}
    </tr>
  );
};

export default WishlistItem;
