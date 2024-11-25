"use client";
import React, { ReactNode, useRef, useState } from "react";
import { RadioCardItem, RadioCardRoot } from "../ui/radio-card";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuBookDown, LuBookUp, LuCheck } from "react-icons/lu";
import { Field } from "../ui/field";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Button } from "../ui/button";
import { useGetObjectById } from "@/hooks/useGetObjectById";
import { Book, Member } from "@/lib/types";
import { useGetLoanStat } from "@/hooks/useGetLoanStat";
import { toaster } from "../ui/toaster";

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

  const [action, setAction] = useState(items[0].value);
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

  const { data: bookData, mutate: bookMutate } = useGetObjectById<Book>(
    "book",
    bookId
  );
  const { data: memberData } = useGetObjectById<Member>("member", memberId);
  const { data: loanStatData, mutate } = useGetLoanStat(memberId);

  const beUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  const handleSaveLoan = () => {
    if (!memberId || !bookId) {
      toaster.create({
        title: `Enter member ID and book ID in advance.`,
        type: "error",
      });
    }

    fetch(`${beUrl}/loan${action === "return" ? "/return" : ""}`, {
      method: "POST",
      body: JSON.stringify({
        member: memberId,
        book: bookId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok)
          toaster.create({
            title: `Save Successfully`,
            type: "success",
          });
        mutate();
        bookMutate();
        return res.json();
      })
      .catch((err) =>
        toaster.create({
          title: `Error:  ${err}`,
          type: "error",
        })
      );
  };

  return (
    <Stack minH={"100vh"}>
      <RadioCardRoot
        w={400}
        ml={"auto"}
        size={"sm"}
        orientation={"horizontal"}
        justify={"center"}
        value={action}
      >
        <HStack align="stretch">
          {items.map((item) => (
            <RadioCardItem
              label={item.title}
              indicator={false}
              key={item.value}
              value={item.value}
              icon={<Icon fontSize={"xl"}>{item.icon}</Icon>}
              onClick={() => setAction(item.value)}
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
            <>
              <DataListRoot orientation="horizontal" mt={4}>
                {Object.entries(memberData).map(([label, value]) => (
                  <DataListItem key={label} label={label} value={value} />
                ))}
              </DataListRoot>
              <Separator mt={4}></Separator>
              <Text fontWeight={"medium"} mt={2}>
                Loan Infor
              </Text>
              {loanStatData?.length ? (
                <DataListRoot orientation="horizontal">
                  {loanStatData.map((item) => (
                    <DataListItem
                      key={item.status}
                      label={item.status}
                      value={item.count}
                    />
                  ))}
                </DataListRoot>
              ) : (
                <div>No data</div>
              )}
            </>
          )}
          {!memberData && (
            <Text fontSize={"sm"} mt={4}>
              No data
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
            <DataListRoot orientation="horizontal" mt={4}>
              {Object.entries(bookData).map(([label, value]) => (
                <DataListItem key={label} label={label} value={value} />
              ))}
            </DataListRoot>
          )}
          {!bookData && (
            <Text fontSize={"sm"} mt={4}>
              No data
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
        <Button px={12} onClick={handleSaveLoan}>
          Save
        </Button>
      </Container>
    </Stack>
  );
};

export default Action;
