import React, { ReactNode } from "react";
import { RadioCardItem, RadioCardRoot } from "../ui/radio-card";
import {
  Container,
  HStack,
  Icon,
  IconButton,
  Input,
  Stack,
} from "@chakra-ui/react";
import { LuBookDown, LuBookUp, LuCheck } from "react-icons/lu";
import { Field } from "../ui/field";
import { DataListItem, DataListRoot } from "../ui/data-list";
import { Button } from "../ui/button";

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
              <Input placeholder="Enter member's ID"></Input>
            </Field>
            <IconButton variant={"surface"}>
              <LuCheck />
            </IconButton>
          </HStack>
          <DataListRoot orientation="horizontal" mt={4}>
            {stats.map((item) => (
              <DataListItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </DataListRoot>
        </Stack>


        <Stack flex={1}>
          <HStack alignItems={"end"}>
            <Field label="Book's ID" w={320}>
              <Input placeholder="Enter book's ID"></Input>
            </Field>
            <IconButton variant={"surface"}>
              <LuCheck />
            </IconButton>
          </HStack>
          <DataListRoot orientation="horizontal" mt={4}>
            {stats.map((item) => (
              <DataListItem
                key={item.label}
                label={item.label}
                value={item.value}
              />
            ))}
          </DataListRoot>
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
