import React from "react";

import MenuContextProvider from "../../../store/menu-context";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";
import Footer from "../footer/Footer";
import BackToTopButton from "../../UI/back to top button/BackToTopButton";

const Layout = ({ children, dir, className }) => {
  return (
    <div dir={dir}>
      <div>
        <MenuContextProvider>
          <NavigationBar />
        </MenuContextProvider>
        <main className={className}>{children}</main>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Layout;
