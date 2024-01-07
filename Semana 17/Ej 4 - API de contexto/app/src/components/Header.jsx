import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Title from "./Title";
import { useTheme } from "./ThemeContext";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header>
      <Title />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
