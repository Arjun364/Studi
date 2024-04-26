import { createContext, useState } from "react";

// Create the user context
export const UserContext = createContext({});

// Define the provider component
 function UserProvider({ children }) {
  const [user, setUser] = useState()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}
export default UserProvider