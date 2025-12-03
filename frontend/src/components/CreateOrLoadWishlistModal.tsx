import React, { useEffect, useRef } from "react";
import NewOrLoadMenu from "./NewOrLoadMenu";

interface CreateOrLoadWishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (wishlistName: string) => void;
  onLoad: (wishlistId: string) => void;
}

const CreateOrLoadWishlistModal: React.FC<CreateOrLoadWishlistModalProps> = ({
  isOpen,
  onClose,
  onCreate,
  onLoad,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Control dialog open/close state
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    // Listen for dialog close events (like ESC key) to sync React state
    const handleDialogClose = () => {
      onClose();
    };

    dialog.addEventListener("close", handleDialogClose);

    return () => {
      dialog.removeEventListener("close", handleDialogClose);
    };
  }, [isOpen, onClose]);

  const handleCreate = (wishlistName: string) => {
    onCreate(wishlistName);
    onClose();
  };

  const handleLoad = (wishlistId: string) => {
    onLoad(wishlistId);
    onClose();
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box max-w-4xl">
        <h3 className="font-bold text-lg mb-6">Wishlist</h3>

        <NewOrLoadMenu onCreateWishlist={handleCreate} onLoadWishlist={handleLoad} />

        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={onClose}>
              Cancel
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onClose}>close</button>
      </form>
    </dialog>
  );
};

export default CreateOrLoadWishlistModal;
