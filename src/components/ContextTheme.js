import { createContext, useContext, useState } from "react";

const ContextTheme = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ContextTheme.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </ContextTheme.Provider>
  );
};

export const useTheme = () => useContext(ContextTheme);
