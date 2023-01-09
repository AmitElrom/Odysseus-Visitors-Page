import React, { useContext, useEffect } from "react";
import { scroller } from "react-scroll";
import { useLocation } from "react-router";

import MenuContextProvider from "../../../store/menu-context";
import SanityApiContextProvider from "../../../store/sanity-api-context";

import NavigationBar from "../navigation bar/navigation bar/NavigationBar";
import Footer from "../footer/Footer";
import BackToTopButton from "../../UI/back to top button/BackToTopButton";

const Layout = ({ children, dir, className }) => {

  const { pathname } = useLocation();

  useEffect(() => {
    let scrollTo = sessionStorage.getItem("main-page-scroll-to");
    if (scrollTo && pathname === "/") {
      scroller.scrollTo(scrollTo, {
        spy: true,
        smooth: true,
        offset: -100,
        duration: 500,
      });
      sessionStorage.removeItem("main-page-scroll-to")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage.getItem("main-page-scroll-to")]);

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
