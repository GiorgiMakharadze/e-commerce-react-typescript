import React, { useContext, useEffect, useState, createContext } from "react";
import { useAuth0, User } from "@auth0/auth0-react";

interface UserContextType {
  loginWithRedirect?: () => void;
  logout?: () => void;
  myUser?: User | null | false;
}

const UserContext = createContext<UserContextType>({});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loginWithRedirect, logout, user, isLoading } =
    useAuth0();

  const [myUser, setMyUser] = useState<null | User | false>(null);

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user || null);
    } else {
      setMyUser(false);
    }
    console.log("user", user);
    console.log("isAuthenticated", isAuthenticated);
    console.log("loginWithRedirect", loginWithRedirect);
  }, [isAuthenticated]);

  return (
    <UserContext.Provider value={{ loginWithRedirect, logout, myUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext<UserContextType>(UserContext);
};
