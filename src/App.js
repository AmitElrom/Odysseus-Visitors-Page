import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from "./components/layout/layout/Layout";
import MainPage from "./components/pages/main page/MainPage";
import ArticlePage from "./components/pages/article page/article page/ArticlePage";

import classes from "./App.module.css";
import { useContext } from 'react';
import { sanityApiContext } from './store/sanity-api-context';


function App() {

  const { ltr } = useContext(sanityApiContext);

  return (
    <Layout className={classes.App} dir={ltr ? "ltr" : "rtl"}>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/articles/:articleId' element={<ArticlePage />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
