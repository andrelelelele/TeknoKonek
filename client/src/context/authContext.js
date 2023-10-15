import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    //TO DO
    setCurrentUser({
      id: 1,
      name: "André Erasmo",
      profilePic:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.allkpop.com%2Farticle%2F2023%2F01%2Fnam-joo-hyuk-to-fulfill-army-service-as-military-police-officer&psig=AOvVaw0TOzG4DH7KUDlLScWMD-l6&ust=1697295738913000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCM976l84EDFQAAAAAdAAAAABAE",
    });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
