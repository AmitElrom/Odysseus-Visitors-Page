import { createContext, useState } from "react";

export const languageContext = createContext({
  lng: "",
  lngCode: "",
  rtl: true,
  changeLanguageHandler: () => {},
});

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState({
    lng: "",
    lngCode: "",
    rtl: true,
  });

  const changeLanguageHandler = ({ lng, lngCode, rtl }) => {
    setLanguage((prevLng) => {
      return {
        ...prevLng,
        lng,
        lngCode,
        rtl,
      };
    });
  };

  const contextValues = {
    ...language,
    changeLanguageHandler,
  };

  return (
    <languageContext.Provider value={contextValues}>
      {children}
    </languageContext.Provider>
  );
};

export default LanguageContextProvider;
