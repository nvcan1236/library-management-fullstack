"use client";
import React, { ReactNode, useState } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";

const AlertDialog = ({
  message = "This action cannot be undone. This will permanently delete this and remove your data from our systems.",
  onConfirm,
  children,
}: {
  message?: string;
  onConfirm: () => void;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <DialogRoot
      role="alertdialog"
      placement={"center"}
      size={"sm"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Button variant="plain" size="sm" colorPalette={"red"}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>{message}</p>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button
            colorPalette="red"
            onClick={() => {
              onConfirm();
              setOpen(false)
            }}
          >
            Delete
          </Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default AlertDialog;
