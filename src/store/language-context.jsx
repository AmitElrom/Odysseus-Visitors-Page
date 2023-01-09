import { createContext, useState } from "react";

export const languageContext = createContext({
  isHebrew: true,
  changeLanguageHandler: () => {},
});

const LanguageContextProvider = ({ children }) => {
  const [isHebrew, setIsHebrew] = useState(true);

  const changeLanguageHandler = () => {
    setIsHebrew((prev) => !prev);
  };

  const contextValues = {
    isHebrew,
    changeLanguageHandler,
  };

  return (
    <languageContext.Provider value={contextValues}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageContextProvider;
