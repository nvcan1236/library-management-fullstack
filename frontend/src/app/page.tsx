import LoginHeader from "@/components/login/login-header";
import Action from "@/components/action/action";
import BooksContent from "@/components/books/books";
import Librarians from "@/components/librarian/librarians";
import Members from "@/components/member/members";
import {
  Container,
  Heading,
  HStack,
  Icon,
  Tabs,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import {
  LuBook,
  LuLibrary,
  LuUser,
  LuUsers,
  LuUsers2,
} from "react-icons/lu";
import ThemeSwitch from "@/components/common/theme-switch";

export default function Home() {
  const tabs: {
    value: string;
    label: string;
    icon: ReactNode;
    content: ReactNode;
  }[] = [
    {
      content: <Action />,
      label: "Actions",
      icon: <LuUser />,
      value: "action",
    },
    {
      content: <BooksContent />,
      label: "Books",
      icon: <LuBook />,
      value: "book",
    },
    {
      content: <Members />,
      label: "Members",
      icon: <LuUsers2 />,
      value: "member",
    },
    {
      content: <Librarians />,
      label: "Librarian",
      icon: <LuUsers />,
      value: "librarian",
    },
  ];


  return (
    <Container colorPalette={"blue"}>
      <HStack align={"end"} justify={"space-between"}>
        <Heading
          mt={12}
          display={"flex"}
          alignItems={"end"}
          gap={2}
          color={"blue.solid"}
          fontWeight={700}
        >
          <Icon mb={1} size={"2xl"}>
            <LuLibrary />
          </Icon>{" "}
          Library Management System
        </Heading>

        <HStack gap={8}>
          <ThemeSwitch />
          <LoginHeader />
        </HStack>
      </HStack>
      <Tabs.Root
        defaultValue={tabs[0].value}
        w={"full"}
        // justify={"end"}
        mt={4}
        size={"md"}
      >
          <Tabs.List>
            {tabs.map((tab) => (
              <Tabs.Trigger value={tab.value} key={tab.value}>
                {tab.icon}
                {tab.label}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        

        {tabs.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value}>
            {tab.content}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Container>
  );
}
