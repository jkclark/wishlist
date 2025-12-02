import React, { useEffect, useRef } from "react";

interface DeleteItemModalProps {
  isOpen: boolean;
  itemName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteItemModal: React.FC<DeleteItemModalProps> = ({ isOpen, itemName, onConfirm, onCancel }) => {
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
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm();
    onCancel(); // Close modal after confirming
  };

  return (
    <dialog ref={dialogRef} className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Delete Item</h3>
        <p className="py-4">Are you sure you want to delete the following item?</p>
        <div className="font-semibold bg-base-200 p-3 rounded mb-6">{itemName}</div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={onCancel}>
              Cancel
            </button>
          </form>
          <button className="btn btn-error" onClick={handleConfirm}>
            Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={onCancel}>close</button>
      </form>
    </dialog>
  );
};

export default DeleteItemModal;
