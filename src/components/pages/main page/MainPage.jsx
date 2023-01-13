import React, { Fragment } from "react";

import Main from "./main/Main";
import About from "./about/About";
import ValuesAndArticles from "./values and articles/values and articles/ValuesAndArticles";
import Contact from "./contact/contact/Contact";
import Footer from "../../layout/footer/Footer";

const MainPage = () => {
  return (
    <Fragment>
      <Main />
      <About />
      <ValuesAndArticles />
      <Contact />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default MainPage;
