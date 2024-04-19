import React, { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const handleSetState = (item) => {
    setUser(item);
    console.log(item, "CONTEXT KA RESPONE  HY YE");
  };
  console.log(user);
  return (
    <UserContext.Provider value={{ user, handleSetState }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
