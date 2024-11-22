import React from "react";
import { DataListItem, DataListRoot } from "../ui/data-list";
import useSWR from "swr";
import { Book } from "@/lib/types";
import { fetcher } from "@/lib/fetcher";
import { Spinner, Text } from "@chakra-ui/react";

const BookDetail = ({ id }: { id: string }) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";
  const { data, isLoading } = useSWR<Book>(`${beUrl}/book/${id}`, fetcher);

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