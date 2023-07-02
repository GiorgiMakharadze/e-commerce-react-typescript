import React, { useContext, useEffect, useState, createContext } from "react";
import { useAuth0, User } from "@auth0/auth0-react";

interface UserContextType {
  loginWithRedirect?: () => void;
  logout?: () => void;
  myUser?: User | null | false;
}

const UserContext = createContext<UserContextType>({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { loginWithRedirect, logout, user } = useAuth0();

  const [myUser, setMyUser] = useState<null | User | false>(null);

  useEffect(() => {
    setMyUser(user || null);
  }, [user]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext<UserContextType>(UserContext);
};
