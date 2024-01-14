import React, { useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      email: "dom@me.com",
      name: "Dom",
      password: "Access123",
      balance: 700,
    },
    {
      email: "blashley@school.edu",
      name: "Bl",
      password: "Passcode321",
      balance: 500,
    },
    {
      email: "mochalla@catz.com",
      name: "Mocha",
      password: "CatzRule!",
      balance: 300,
    },
  ]);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
