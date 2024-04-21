import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </>
  );
}

export default App;
