import { Routes, Route } from 'react-router-dom';

import Layout from "./components/layout/layout/Layout";
import MainPage from "./components/pages/main page/MainPage";
import ArticlePage from "./components/pages/article page/ArticlePage";

import classes from "./App.module.css";


function App() {
  return (
    <Layout className={classes.App} dir="rtl">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/articles/:articleId' element={<ArticlePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
