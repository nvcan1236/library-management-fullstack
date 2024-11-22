"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { RadioCardItem, RadioCardRoot } from "../ui/radio-card";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuBookDown, LuBookUp, LuCheck } from "react-icons/lu";
import { Field } from "../ui/field";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Button } from "../ui/button";
import { useGetObjectById } from "@/hooks/useGetObjectById";
import { Book, Member } from "@/lib/types";

const Action = () => {
  const items: { title: string; value: string; icon: ReactNode }[] = [
    {
      title: "Borrow",
      value: "borrow",
      icon: <LuBookUp />,
    },
    {
      title: "Return",
      value: "return",
      icon: <LuBookDown />,
    },
  ];

  const [bookId, setBookId] = useState<string>();
  const [memberId, setMemberId] = useState<string>();
  const bookIdRef = useRef<HTMLInputElement>(null);
  const memberIdRef = useRef<HTMLInputElement>(null);

  const handleCheckMember = () => {
    setMemberId(memberIdRef.current?.value);
  };

  const handleCheckBook = () => {
    setBookId(bookIdRef.current?.value);
  };

  const { data: bookData } = useGetObjectById<Book>("book", bookId);
  const { data: memberData } = useGetObjectById<Member>("member", memberId);

  return (
    <Stack minH={"100vh"}>
      <RadioCardRoot
        defaultValue={items[0].value}
        w={400}
        ml={"auto"}
        size={"sm"}
        orientation={"horizontal"}
        justify={"center"}
      >
        <HStack align="stretch">
          {items.map((item) => (
            <RadioCardItem
              label={item.title}
              indicator={false}
              key={item.value}
              value={item.value}
              icon={<Icon fontSize={"xl"}>{item.icon}</Icon>}
            />
          ))}
        </HStack>
      </RadioCardRoot>

      <HStack gap={12} alignItems={"start"}>
        <Stack flex={1}>
          <HStack alignItems={"end"}>
            <Field label="Member's ID" w={320}>
              <Input placeholder="Enter member's ID" ref={memberIdRef}></Input>
            </Field>
            <IconButton variant={"surface"} onClick={() => handleCheckMember()}>
              <LuCheck />
            </IconButton>
          </HStack>
          {memberData && (
            <DataListRoot orientation="horizontal" mt={4}>
              {Object.entries(memberData).map(([label, value]) => (
                <DataListItem key={label} label={label} value={value} />
              ))}
            </DataListRoot>
          )}
          {!memberData && (
            <Text fontSize={"sm"} mt={4}>
              Không có dữ liệu
            </Text>
          )}
        </Stack>

        <Stack flex={1}>
          <HStack alignItems={"end"}>
            <Field label="Book's ID" w={320}>
              <Input placeholder="Enter book's ID" ref={bookIdRef}></Input>
            </Field>
            <IconButton variant={"surface"} onClick={() => handleCheckBook()}>
              <LuCheck />
            </IconButton>
          </HStack>
          {bookData && (
            <DataListRoot orientation="horizontal" mt={4} >
              {Object.entries(bookData).map(([label, value]) => (
                <DataListItem key={label} label={label} value={value} />
              ))}
            </DataListRoot>
            
          )}
          {!bookData && (
            <Text fontSize={"sm"} mt={4}>
              Không có dữ liệu
            </Text>
          )}
        </Stack>
      </HStack>
      <Container
        position={"fixed"}
        bottom={0}
        py={4}
        left={0}
        right={0}
        textAlign={"right"}
      >
        <Button px={12}>Save</Button>
      </Container>
    </Stack>
  );
};

const stats = [
  { label: "New Users", value: "234", diff: -12, helpText: "Till date" },
  { label: "Sales", value: "£12,340", diff: 12, helpText: "Last 30 days" },
  { label: "Revenue", value: "3,450", diff: 4.5, helpText: "Last 30 days" },
];

export default Action;
