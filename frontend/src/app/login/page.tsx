"use client"
import LoginForm from "@/components/login/login-form";
import { Box, Heading, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const LoginPage = () => {
  return (
    <Stack align={"center"} justify={"center"} h={"100vh"} bg={"blue.50"}>
      <HStack gap={10} align={"stretch"} bg={"Background"}>
        <Box w={500} bg={"blue.subtle"} p={20}>
          <Heading color={"blue.solid"} size={"5xl"}>
            Library Management System
          </Heading>
        </Box>
        <Box w={500} p={10} >
          <LoginForm></LoginForm>
        </Box>
      </HStack>
    </Stack>
  );
};

export default LoginPage;
