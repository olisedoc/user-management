import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Header />
        <p>Users</p> 
    </>
  );
}

export default App;
