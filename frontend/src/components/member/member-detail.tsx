import { fetcher } from "@/lib/fetcher";
import { Member } from "@/lib/types";
import { Spinner, Text } from "@chakra-ui/react";
import React from "react";
import useSWR from "swr";
import { DataListItem, DataListRoot } from "../ui/data-list";

const MemberDetail = ({id}:{id:string}) => {
  const beUrl = process.env.BACKEND_URL || "http://localhost:8000/api";
  const { data, isLoading } = useSWR<Member>(`${beUrl}/member/${id}`, fetcher);

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

export default MemberDetail;
