import { useEffect, useState } from 'react';

const useCounter = (initCounter = 0) => {
  const [counter, setCounter] = useState(initCounter);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    document.title = `El contador tiene un valor de ${counter}`;
  }, [counter]);

  return { counter, incrementCounter, decreaseCounter };
};

export default useCounter;
