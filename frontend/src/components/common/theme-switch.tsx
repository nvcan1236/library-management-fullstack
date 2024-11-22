"use client";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { useTheme } from "@/context/theme";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeSwitch = () => {
  const { setTheme, theme } = useTheme();
  return (
    <IconButton
      variant={"plain"}
      onClick={() => {
        if (theme === "dark") setTheme("light");
        else setTheme("dark");
      }}
    >
      {theme === "light" ? <LuMoon /> : <LuSun />}
    </IconButton>
  );
};

export default ThemeSwitch;
