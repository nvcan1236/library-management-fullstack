"use client";
import { HStack, Table } from "@chakra-ui/react";
import React from "react";
import Dialog from "../common/dialog";
import { useClickRow } from "@/hooks/useClickRow";
import { Librarian } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import LibrarianDetail from "./librarian-detail";
import AlertDialog from "../common/alert-dialog";
import { useDeleteObject } from "@/hooks/useDeleteObject";
import CreateDialog from "../common/create-dialog";
import { useGetObject } from "@/hooks/useGetObject";

const Librarians = () => {
  const { id, handleRowClick, openDialog, closeDialog } = useClickRow();

  const { data, mutate } = useGetObject<Librarian>("librarian");

  const { fetch } = useDeleteObject("librarian", id);
  const deleteLibrarian = async () => {
    fetch();
    mutate(
      (currentData) =>
        currentData?.filter((librarian) => librarian._id !== id) || [],
      false
    );

    closeDialog();
  };

  return (
    <>
      <HStack justify={"end"} mt={-10} mb={4}>
        <CreateDialog type="librarian" />
      </HStack>
      <Table.ScrollArea borderWidth="1px" rounded="md" maxH="600px">
        <Table.Root size="md" variant={"outline"} interactive stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Address</Table.ColumnHeader>
              <Table.ColumnHeader>Position</Table.ColumnHeader>
              <Table.ColumnHeader>Join At</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data?.map((item) => (
              <Table.Row
                key={item._id}
                onClick={() => handleRowClick(item._id)}
              >
                <Table.Cell>{item._id}</Table.Cell>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.email}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>{item.position}</Table.Cell>
                <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      <Dialog
        open={openDialog}
        onOpenChange={closeDialog}
        title="Librarian Detail"
        deleteButton={
          <AlertDialog onConfirm={deleteLibrarian}>Delete</AlertDialog>
        }
      >
        <LibrarianDetail id={id} />
      </Dialog>
    </>
  );
};
export default Librarians;
