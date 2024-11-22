import React from "react";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Librarian } from "@/lib/types";
import { Text } from "@chakra-ui/react";
import { useGetObjectById } from "@/hooks/useGetObjectById";

const LibrarianDetail = ({ id }: { id: string }) => {
  const { data } = useGetObjectById<Librarian>("librarian", id);

  if (!data) return <Text>Not Found</Text>;

  return (
    <DataListRoot orientation="horizontal">
      {Object.entries(data || {}).map(([label, value]) => (
        <DataListItem key={label} label={label} value={value as string} />
      ))}
    </DataListRoot>
  );
};

export default LibrarianDetail;
