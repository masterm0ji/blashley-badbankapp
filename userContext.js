import React from "react";

const UserContext = React.createContext();

const UserProvider = ({ bankUser }) => {
  const users = [
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
  ];

  return (
    <UserContext.Provider value={{ users }}>{bankUser}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
