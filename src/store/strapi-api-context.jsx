import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const strapiApiContext = createContext({
  values: [],
  articles: [],
});

const StrapiApiContextProvider = ({ children }) => {
  const [values, setValues] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const { data: dataArticles } = await axios.get(
        `${process.env.REACT_APP_STRAPI_API_URL}/articles?populate=*`,
        {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`,
          },
        }
      );
      const { data: dataValues } = await axios.get(
        `${process.env.REACT_APP_STRAPI_API_URL}/values?populate=*`,
        {
          headers: {
            Authorization: `bearer ${process.env.REACT_APP_STRAPI_API_TOKEN}`,
          },
        }
      );
      setArticles(dataArticles?.data);
      setValues(dataValues?.data);
    })();
  }, []);

  const contextValue = {
    values,
    articles,
  };

  return (
    <strapiApiContext.Provider value={contextValue}>
      {children}
    </strapiApiContext.Provider>
  );
};

export default StrapiApiContextProvider;
