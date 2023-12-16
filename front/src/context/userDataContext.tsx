import { createContext, useState } from "react";
import { UserData } from "../types/Type";

export const UserDataContext = createContext<UserData>({
  userName: null,
  email: null,
  password: null,
  favouriteTracks: null,
});

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    userName: null,
    email: null,
    password: null,
    favouriteTracks: null,
  });

  const sharedState = {
    userData,
    setUserData,
  };
  return (
    <UserDataContext.Provider value={sharedState}>
      {children}
    </UserDataContext.Provider>
  );
};
