import randomColor from "randomcolor";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [backgroundColor, setBackgroundcolor] = useState("");

  useEffect(() => {
    const randomBackgroundColor = randomColor();
    setBackgroundcolor(randomBackgroundColor);
  }, []);
  return (
    <>
      <h1 style={{ backgroundColor }}>HOLA REACT y VITE</h1>
      <p className="importante">Este Parrafo es importante..!!!</p>
    </>
  );
};

export default App;
