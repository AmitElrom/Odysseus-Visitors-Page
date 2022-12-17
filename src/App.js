import Layout from "./components/layout/layout/Layout";

import classes from "./App.module.css";
import Main from "./components/pages/main/Main";
import About from "./components/pages/about/About";
import ValuesAndArticles from "./components/pages/values and articles/values and articles/ValuesAndArticles";
import Contact from "./components/pages/contact/contact/Contact";

function App() {
  return <Layout className={classes.App} dir="rtl" >
    <Main />
    <About />
    <ValuesAndArticles />
    <Contact />
  </Layout>;
}

export default App;
