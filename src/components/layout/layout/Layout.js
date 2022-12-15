import React from "react";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";

const Layout = ({ children, dir, className }) => {
  return (
    <div dir={dir}>
      <NavigationBar />
      <main className={className}>{children}</main>
    </div>
  );
};

export default Layout;
