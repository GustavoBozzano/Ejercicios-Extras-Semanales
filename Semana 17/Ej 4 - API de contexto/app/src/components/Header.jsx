import ThemeSwitcher from './ThemeSwitcher';
import Title from './Title';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { theme } = useTheme();

  return (
    <header>
      <Title />
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
