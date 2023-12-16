import { useContext } from "react";
import { UserDataContext } from "../context/userDataContext";

export const useUserDataContext = () => {
  const { userData, setUserData } = useContext(UserDataContext);
  return { userData, setUserData };
};
