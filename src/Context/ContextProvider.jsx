import React, { useState } from "react";
import { createContext, useContext } from "react";
import useFetch from "../components/useFetch";


const AppContext = createContext();

const ContextProvider = ({ children }) => {
  //!-----------this state shown loading ---------------
  const [query, setQuery] = useState("titanic");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
//!-----------this is custom hooks it data to share with other components-----------
const CustomHook = () => {
  return useContext(AppContext);
};

export default ContextProvider;
//!---------export the custom hook----------
export { CustomHook };
