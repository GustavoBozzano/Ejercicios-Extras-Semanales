import useCounter from './Hook/useCounter';

function App() {
  const { counter, incrementCounter, decreaseCounter } = useCounter();

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={decreaseCounter}>Disminuir</button>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
