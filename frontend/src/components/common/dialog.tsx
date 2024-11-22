"use client";
import React, { ReactNode } from "react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { HStack } from "@chakra-ui/react";

const Dialog = ({
  open,
  onOpenChange,
  children,
  title,
  deleteButton,
}: {
  open: boolean;
  title: string;
  children: ReactNode;
  onOpenChange: () => void;
  deleteButton?: ReactNode;
}) => {
  return (
    <DialogRoot
      lazyMount
      open={open}
      onOpenChange={onOpenChange}
      placement={"center"}
    >
      <DialogContent colorPalette={"blue"}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <DialogBody>{children}</DialogBody>
        <DialogFooter justifyContent={deleteButton ? "space-between" : "end"}>
          {deleteButton && deleteButton}
          <HStack>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button>Save</Button>
          </HStack>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default Dialog;
