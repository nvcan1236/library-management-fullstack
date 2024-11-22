import { useState } from "react";

export const useClickRow = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [id, setBookId] = useState("");
  const handleRowClick = (id: string) => {
    setOpenDialog(true);
    setBookId(id);
  };
  const closeDialog = () => {
    setOpenDialog(false);
  }

  return {
    openDialog,
    id,
    handleRowClick,
    closeDialog
  };
};
