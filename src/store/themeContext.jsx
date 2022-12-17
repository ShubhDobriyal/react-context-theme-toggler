import { createContext, useEffect, useState } from "react";

const isDarkInitially = () => {
  if (localStorage.theme === "dark") return true;
  return false;
};

const ThemeContext = createContext({
  isDark: false,
  themeToggle: () => {},
});

export const ThemeContextProvider = (props) => {
  const [isDark, setIsDark] = useState(isDarkInitially);

  const themeToggler = () => {
    setIsDark((val) => !val);
  };

  useEffect(() => {
    if (isDark) localStorage.theme = "dark";
    else localStorage.theme = "light";
  }, [isDark]);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        themeToggle: themeToggler,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
