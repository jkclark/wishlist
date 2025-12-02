import type { WishlistItemData } from "@wishlist/common";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Wishlist from "./components/Wishlist";

export type WishlistMode = "owner" | "gifter";
export interface WishlistData {
  name: string;
  items: WishlistItemData[];
}

function App() {
  const [wishlistMode, setWishlistMode] = useState<WishlistMode | null>("owner");
  const [wishlistContent, setWishlistContent] = useState<WishlistData>({
    name: "My Wishlist",
    items: [
      {
        name: "Wireless Headphones",
        link: "https://example.com/headphones",
        price: 99.99,
        bought: true,
        received: false,
      },
      {
        name: "Smart Watch",
        link: "https://example.com/smartwatch",
        price: 199.99,
        bought: false,
        received: false,
      },
      {
        name: "E-Reader",
        link: "https://example.com/ereader",
        price: 129.99,
        bought: false,
        received: false,
      },
    ],
  });

  return (
    <div className="w-full h-dvh flex bg-base-100 flex-0 flex-col">
      <Navbar />
      {wishlistMode && wishlistContent && (
        <Wishlist name={wishlistContent.name} mode={wishlistMode} items={wishlistContent.items} />
      )}
    </div>
  );
}

export default App;
