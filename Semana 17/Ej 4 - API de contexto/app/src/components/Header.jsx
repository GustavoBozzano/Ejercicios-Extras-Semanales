import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Title from "./Title";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      style={{
        backgroundColor: theme === "dark" && "#333",
      }}
    >
      <Title />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
