import { createContext, useState } from "react";

const NameContext = createContext();

const NameContextProvider = ({ children }) => {
  let [name, setName] = useState("");

  const addUser = function (e) {
    e.preventDefault();
    let data = setName(e.target[0].value);
    data = name;
  };

  return (
    <NameContext.Provider value={{ name, setName, addUser }}>
      {children}
    </NameContext.Provider>
  );
};

export default NameContext;

export { NameContextProvider };
