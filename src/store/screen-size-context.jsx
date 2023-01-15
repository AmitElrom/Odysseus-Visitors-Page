import { createContext, useState, useEffect } from "react";

export const screenSizeContext = createContext({
  isMobile: false,
  width: 0,
  height: 0,
  isNotPhoneOrTablet: true,
});

const ScreenSizeContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 560);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [isNotPhoneOrTablet, setIsNotPhoneOrTablet] = useState(true);

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
    const userAgent = navigator.userAgent;
    const phoneRegex = /(iphone|ipod|android|blackberry|windows phone)/i;
    const tabletRegex = /(ipad|tablet)/i;

    setIsNotPhoneOrTablet(
      !phoneRegex.test(userAgent) && !tabletRegex.test(userAgent)
    );
  }, []);

  useEffect(() => {
    const root = document.getElementById("root");
    root.style.setProperty("--nav-height", isNotPhoneOrTablet ? "10vh" : "7vh");
  }, [isNotPhoneOrTablet]);

  const contextValue = {
    isMobile,
    width,
    height,
    isNotPhoneOrTablet,
  };

  return (
    <screenSizeContext.Provider value={contextValue}>
      {children}
    </screenSizeContext.Provider>
  );
};

export default ScreenSizeContextProvider;
