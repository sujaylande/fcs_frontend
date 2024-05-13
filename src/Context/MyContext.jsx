import React, { createContext, useState, useContext } from "react";

const MyContext = createContext(null);

export const MyProvider = ({ children }) => {
  const [myVariable, setMyVariable] = useState("initialValue");

  return (
    <MyContext.Provider value={{ myVariable, setMyVariable }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
