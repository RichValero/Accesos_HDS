import { createContext, useContext } from "react";

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const getToken = () => localStorage.getItem("token"); //saving token in local storage

  //REMEMBER TO LOOK WHAT THIS DOES, ADD COMMENTS TO EXPLAIN TO YOURSELF
  const setToken = (token) => {
    localStorage.setItem("token", token); //REMEMBER TO LOOK WHAT THIS DOES, ADD COMMENTS TO EXPLAIN TO YOURSELF
  };

  //REMEMBER TO LOOK WHAT THIS DOES, ADD COMMENTS TO EXPLAIN TO YOURSELF
  //Removing token from local storage
  const removeToken = () => {
    localStorage.removeItem("token");
  };

  return (
    <TokenContext.Provider value={{ getToken, setToken, removeToken }}>
      {children}
    </TokenContext.Provider>
  );
};
