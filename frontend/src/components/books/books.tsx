"use client";
import { HStack, Table } from "@chakra-ui/react";
import React from "react";
import Dialog from "../common/dialog";
import { useClickRow } from "@/hooks/useClickRow";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { Book } from "@/lib/types";
import BookDetail from "./book-detail";
import { formatDate } from "@/lib/utils";
import AlertDialog from "../common/alert-dialog";
import { useDeleteObject } from "@/hooks/useDeleteObject";
import CreateDialog from "../common/create-dialog";
import { useGetObject } from "@/hooks/useGetObject";

const BooksContent = () => {
  const { id, handleRowClick, openDialog, closeDialog } = useClickRow();
  const { data, mutate } = useGetObject<Book>("book");
  const { fetch } = useDeleteObject("book", id);
  const deleteBook = () => {
    fetch();
    mutate(
      (currentData) => currentData?.filter((book) => book._id !== id) || [],
      false
    );
    closeDialog();
  };

  return (
    <>
      <HStack justify={"end"} mt={-10} mb={4}>
        <CreateDialog type="book" />
      </HStack>
      <Table.ScrollArea borderWidth="1px" rounded="md" maxHeight="600px">
        <Table.Root size="md" variant={"outline"} interactive stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Title</Table.ColumnHeader>
              <Table.ColumnHeader>Author</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader>Language</Table.ColumnHeader>
              <Table.ColumnHeader>Publisher</Table.ColumnHeader>
              <Table.ColumnHeader>Published Date</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Number of copies
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Available of copies
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data?.map((item) => (
              <Table.Row
                key={item._id}
                onClick={() => handleRowClick(item._id.toString())}
              >
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.author}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.language}</Table.Cell>
                <Table.Cell>{item.publisher}</Table.Cell>
                <Table.Cell>{formatDate(item.publishDate)}</Table.Cell>
                <Table.Cell textAlign="end">{item.numberOfCopies}</Table.Cell>
                <Table.Cell textAlign="end">{item.availableCopies}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      <Dialog
        open={openDialog}
        onOpenChange={() => closeDialog()}
        title="Book Detail"
        deleteButton={<AlertDialog onConfirm={deleteBook}>Delete</AlertDialog>}
      >
        <BookDetail id={id}></BookDetail>
      </Dialog>
    </>
  );
};

export default BooksContent;
