"use client";
import { Fieldset, Input, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Field } from "../ui/field";
import { Button } from "../ui/button";
import { PasswordInput } from "../ui/password-input";
import { useLoginContext } from "@/context/login";
import NextLink from "next/link";
import { redirect } from "next/navigation";

const LoginForm = () => {
  const { logedIn, login } = useLoginContext();
  const handleSubmit = () => {
    login();
    redirect("/")
  };

  if (logedIn)
    return (
      <Stack justify={"center"} h={"full"}>
        <Text fontSize={"2xl"}>Bạn đã đang nhập trước đó</Text>
        <Text>
          Quay lại trang chủ{" "}
          <Link asChild fontWeight={600} textDecor={"underline"}>
            <NextLink href={"/"}>Trang chủ</NextLink>
          </Link>
        </Text>
      </Stack>
    );

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Stack>
        <Fieldset.Legend>Login to Library Management System</Fieldset.Legend>
        <Fieldset.HelperText>
          Please provide your contact details below.
        </Fieldset.HelperText>
      </Stack>

      <Fieldset.Content>
        <Field label="Username/Email">
          <Input name="username" />
        </Field>

        <Field label="Password">
          <PasswordInput name="password" />
        </Field>
      </Fieldset.Content>

      <Button type="submit" alignSelf="flex-end" onClick={handleSubmit}>
        Submit
      </Button>
    </Fieldset.Root>
  );
};

export default LoginForm;
