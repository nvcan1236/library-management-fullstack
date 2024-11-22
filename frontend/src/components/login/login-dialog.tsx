import React from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import LoginForm from "./login-form";

const LoginDialog = () => {
  return (
    <DialogRoot placement={"center"}>
      <DialogTrigger asChild>
        <Button px={8}>Login</Button>
      </DialogTrigger>
      <DialogContent colorPalette={"blue"}>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <LoginForm></LoginForm>
        </DialogBody>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

export default LoginDialog;
