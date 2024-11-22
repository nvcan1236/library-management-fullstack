import { Member } from "@/lib/types";
import { Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { useGetObjectById } from "@/hooks/useGetObjectById";

const MemberDetail = ({id}:{id:string}) => {
  const { data, isLoading } = useGetObjectById<Member>("member", id);

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
