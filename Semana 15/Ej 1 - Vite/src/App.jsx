const companyName = import.meta.env.VITE_COMPANY_NAME;
const App = () => {
  return (
    <>
      <h1>{companyName}</h1>
      <img src="../../public/charmander.png" alt="charmander gigante" />
    </>
  );
};
export default App;
