import React from "react";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Librarian } from "@/lib/types";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { Text } from "@chakra-ui/react";

const LibrarianDetail = ({ id }: { id: string }) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";
  const { data } = useSWR<Librarian>(`${beUrl}/librarian/${id}`, fetcher);

  if(!data) return <Text>Not Found</Text>

  return (
    <DataListRoot orientation="horizontal">
      {Object.entries(data || {}).map(([label, value]) => (
        <DataListItem key={label} label={label} value={value as string} />
      ))}
    </DataListRoot>
  );
};

export default LibrarianDetail;
