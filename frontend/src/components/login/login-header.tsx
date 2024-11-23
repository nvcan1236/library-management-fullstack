"use client";
import { HStack, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { Avatar } from "../ui/avatar";
import { LuLogOut } from "react-icons/lu";
import { redirect } from "next/navigation";
import { useLoginContext } from "@/context/login";

const LoginHeader = () => {
  const {logedIn, logout} = useLoginContext()

  if (logedIn)
    return (
      <HStack gap={6}>
        <HStack gap={2}>
          <Avatar size={"sm"} />
          <Text textStyle={"sm"}>Admin</Text>
        </HStack>
        <IconButton variant={"outline"} onClick={logout}>
          <LuLogOut />
        </IconButton>
      </HStack>
    );

  redirect("/login")
};


export default LoginHeader;
