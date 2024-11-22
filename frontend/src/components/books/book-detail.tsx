import React from "react";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Book } from "@/lib/types";
import { Spinner, Text } from "@chakra-ui/react";
import { useGetObjectById } from "@/hooks/useGetObjectById";

const BookDetail = ({ id }: { id: string }) => {
  const { data, isLoading } = useGetObjectById<Book>("book", id);

  if (isLoading) return <Spinner size="lg" />;
  if(!data) return <Text>Not Found</Text>

  return (
    <DataListRoot orientation="horizontal">
      {Object.entries(data || {}).map(([label, value]) => (
        <DataListItem key={label} label={label} value={value as string} />
      ))}
    </DataListRoot>
  );
};

export default BookDetail;
