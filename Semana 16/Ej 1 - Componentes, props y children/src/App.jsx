import React from "react";
import { useState, useEffect } from "react";

import UserList from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/data");
        if (!response.ok) {
          throw new Error("Error de respuesta de red");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.error("Error: ", err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Lista de Usuarios:</h1>
      <UserList users={users} />
    </>
  );
};

export default App;
