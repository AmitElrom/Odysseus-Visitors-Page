import React from "react";
import MenuContextProvider from "../../../store/menu-context";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";
import Footer from "../footer/Footer";
import BackToTopButton from "../../UI/back to top button/BackToTopButton";
import SanityApiContextProvider from "../../../store/sanity-api-context";

const Layout = ({ children, dir, className }) => {
  return (
    <div dir={dir}>
      <MenuContextProvider>
        <NavigationBar />
      </MenuContextProvider>
      <SanityApiContextProvider>
        <main className={className}>{children}</main>
      </SanityApiContextProvider>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
