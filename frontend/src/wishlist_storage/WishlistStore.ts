import type { WishlistData } from "@wishlist/common";

export abstract class WishlistStore {
  abstract createWishlist(name: string): Promise<string>; // Return new wishlist ID
  abstract getWishlist(id: string): Promise<WishlistData>;
  abstract saveWishlist(id: string, wishlistData: WishlistData): Promise<void>;
}
