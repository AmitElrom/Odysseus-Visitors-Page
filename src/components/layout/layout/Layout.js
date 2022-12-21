import React from "react";
import MenuContextProvider from "../../../store/menu-context";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";
import Footer from "../footer/Footer";

const Layout = ({ children, dir, className }) => {
  return (
    <div dir={dir}>
      <MenuContextProvider>
        <NavigationBar />
      </MenuContextProvider>
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
