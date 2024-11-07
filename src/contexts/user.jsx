import { createContext, useState } from "react";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");

  return (
    <UserContext.Provider value={{ token, setToken, message, setMessage }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
