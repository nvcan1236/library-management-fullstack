"use client"
import { Theme } from "@chakra-ui/react";
import {
  ComponentProps,
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type Theme = "light" | "dark";
const themeContext = createContext<{
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
}>({
  theme: "light",
  setTheme: () => {},
});

const ThemeProvider = (props: ComponentProps<"div">) => {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }} {...props}>
      <Theme appearance={theme}>{props.children}</Theme>
    </themeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(themeContext);
  if (context === undefined)
    throw new Error("useTheme must be used within Provider");

  return context;
};

export { useTheme, ThemeProvider };
