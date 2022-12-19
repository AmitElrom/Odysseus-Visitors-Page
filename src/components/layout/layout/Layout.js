import React from "react";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";
import Footer from "../footer/Footer";

const Layout = ({ children, dir, className }) => {
  return (
    <div dir={dir}>
      <NavigationBar />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
