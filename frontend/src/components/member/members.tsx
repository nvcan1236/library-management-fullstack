"use client";
import { useClickRow } from "@/hooks/useClickRow";
import { HStack, Table } from "@chakra-ui/react";
import React from "react";
import Dialog from "../common/dialog";
import { Member } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import MemberDetail from "./member-detail";
import { useDeleteObject } from "@/hooks/useDeleteObject";
import AlertDialog from "../common/alert-dialog";
import CreateDialog from "../common/create-dialog";
import { useGetObject } from "@/hooks/useGetObject";

const Members = () => {
  const { id, handleRowClick, openDialog, closeDialog } = useClickRow();
  const { data, mutate } = useGetObject<Member>("member");

  const { fetch } = useDeleteObject("member", id);
  const deleteMember = async () => {
    fetch();
    mutate(
      (currentData) => currentData?.filter((mem) => mem._id !== id) || [],
      false
    );
    closeDialog();
  };

  return (
    <>
      <HStack justify={"end"} mt={-10} mb={4}>
        <CreateDialog type="member" />
      </HStack>
      <Table.ScrollArea borderWidth="1px" rounded="md" maxH="600px">
        <Table.Root size="md" variant={"outline"} interactive stickyHeader>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Address</Table.ColumnHeader>
              <Table.ColumnHeader>Type</Table.ColumnHeader>
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
                <Table.Cell>{item.type}</Table.Cell>
                <Table.Cell>{formatDate(item.createdAt)}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>

      <Dialog
        open={openDialog}
        onOpenChange={closeDialog}
        title="Member Detail"
        deleteButton={
          <AlertDialog onConfirm={deleteMember}>Delete</AlertDialog>
        }
      >
        <MemberDetail id={id} />
      </Dialog>
    </>
  );
};
export default Members;
