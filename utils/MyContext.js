import { createContext, useState, useEffect } from "react";

const MyContext = createContext();

export function MyContextFunction() {
  const [userInfo, setUserInfo] = useState("Evans");

  return (
    <MyContext.Provider value={{ userInfo, setUserInfo }}></MyContext.Provider>
  );
}
