import { createContext, useState, useEffect } from "react";

export const screenSizeContext = createContext({
  isMobile: false,
  width: 0,
  height: 0,
  isLaptop: null,
});

const ScreenSizeContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 560);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isLaptop, setIsLaptop] = useState(null);

  const updateMedia = () => {
    setIsMobile(window.innerWidth < 560);
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  useEffect(() => {
    setIsLaptop(navigator.userAgent.toLowerCase().indexOf("laptop") !== -1);
  }, []);

  const contextValue = {
    isMobile,
    width,
    height,
    isLaptop,
  };

  return (
    <screenSizeContext.Provider value={contextValue}>
      {children}
    </screenSizeContext.Provider>
  );
};

export default ScreenSizeContextProvider;
