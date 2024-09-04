import { createContext, useState } from "react";

export const AppContext = createContext({
  count: 0,
  setCount: () => {},
  name: "",
  setName: () => {},
});

export default function AppContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John Doe");
  return (
    <AppContext.Provider value={{count, setCount, name, setName}}>
      {children}
    </AppContext.Provider>
  );
}
