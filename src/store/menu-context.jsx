import { createContext, useState } from "react";

export const menuContext = createContext({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  toggleMenu: () => {},
});

const MenuContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    sessionStorage.removeItem("main-page-scroll-to");
    setIsMenuOpen((prevVal) => !prevVal);
  };

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
    toggleMenu,
  };

  return (
    <menuContext.Provider value={contextValue}>{children}</menuContext.Provider>
  );
};

export default MenuContextProvider;
