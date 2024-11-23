"use client";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import {
  ComponentProps,
  createContext,
  useContext,
  useState,
} from "react";

const loginContext = createContext<{
  logedIn: boolean;
  login: () => void;
  logout: () => void;
}>({
  logedIn: getLocalStorage("LMS_LOGIN") == "true" || false,
  login: () => {},
  logout: () => {},
});

function LoginProvider(props: ComponentProps<"div">) {
  const [logedIn, setLogedIn] = useState<boolean>(
    getLocalStorage("LMS_LOGIN") == "true" || false
  );

  const login = () => {
    setLogedIn(true);
    setLocalStorage("LMS_LOGIN", "true");
  };

  const logout = () => {
    setLogedIn(false);
    setLocalStorage("LMS_LOGIN", "false");
  };

  return (
    <loginContext.Provider
      value={{ logedIn, login, logout }}
      {...props}
    ></loginContext.Provider>
  );
}

const useLoginContext = () => {
  const context = useContext(loginContext);
  if (context === undefined) {
    throw new Error("useLoginContext must be used within Provider");
  }
  return context;
};

export { LoginProvider, useLoginContext };
