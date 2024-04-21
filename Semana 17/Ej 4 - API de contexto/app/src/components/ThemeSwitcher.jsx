import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === 'light' ? '🌙' : '☀️'}</button>
  );
};

export default ThemeSwitcher;
