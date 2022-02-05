import { createContext, useContext, useEffect, useState } from "react";
import useFirebaseAuth from "firebaseconfig/useFirebaseAuth";

const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const auth = useFirebaseAuth();
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [isNewReg, setIsNewReg] = useState(false);

  return (
    <UserContext.Provider
      value={{ auth, name, setName, id, setId, isNewReg, setIsNewReg }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}
