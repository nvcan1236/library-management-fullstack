import React, { useState } from "react";
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
import { Fieldset, HStack, Icon, Input } from "@chakra-ui/react";
import { Button } from "../ui/button";
import { LuPlus } from "react-icons/lu";
import { Object as ObjectType } from "@/lib/types";
import { useCreateObject } from "@/hooks/useCreateObject";
import { Field } from "../ui/field";
import { useGetObject } from "@/hooks/useGetObject";

const labelsFor: {
  [key in ObjectType]: { label: string; type?: React.HTMLInputTypeAttribute }[];
} = {
  book: [
    { label: "title", type: "text" },
    { label: "language", type: "text" },
    { label: "numberOfCopies", type: "number" },
    { label: "publisher", type: "text" },
    { label: "author", type: "text" },
    { label: "availableCopies", type: "number" },
    { label: "category", type: "text" },
    { label: "coverImage", type: "url" },
  ],
  librarian: [
    { label: "name", type: "text" },
    { label: "email", type: "email" },
    { label: "address", type: "text" },
    { label: "position", type: "text" },
  ],
  member: [
    { label: "name", type: "text" },
    { label: "email", type: "email" },
    { label: "address", type: "text" },
    { label: "type", type: "text" },
  ],
};

const CreateDialog = ({ type }: { type: ObjectType }) => {
  const [open, setOpen] = useState<boolean>(false);
  const initData = Object.fromEntries(
    labelsFor[type].map((item) => [item.label, ""])
  );
  const [newData, setNewData] = useState(initData);
  const { fetch } = useCreateObject(type, newData);
  const { mutate } = useGetObject(type);

  const createObject = async () => {
    const newData = await fetch();
    mutate((currentData) => [...(currentData || []), newData], false);
    setOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DialogRoot
      lazyMount
      placement={"center"}
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
    >
      <DialogTrigger asChild>
        <Button>
          <Icon>
            <LuPlus />
          </Icon>{" "}
          Add
        </Button>
      </DialogTrigger>
      <DialogContent colorPalette={"blue"}>
        <DialogHeader>
          <DialogTitle>Add new data</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Fieldset.Root size="lg" maxW="md">
            <Fieldset.Content>
              {labelsFor[type].map(({ label, type }) => (
                <Field
                  label={label[0].toUpperCase() + label.slice(1)}
                  key={label}
                  orientation={"horizontal"}
                >
                  <Input
                    type={type}
                    name={label}
                    value={newData[label]}
                    onChange={handleInputChange}
                  />
                </Field>
              ))}
            </Fieldset.Content>
          </Fieldset.Root>
        </DialogBody>
        <DialogFooter>
          <HStack>
            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
            <Button onClick={createObject}>Add</Button>
          </HStack>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default CreateDialog;
