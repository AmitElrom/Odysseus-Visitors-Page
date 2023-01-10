import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { client } from "../client";

export const sanityApiContext = createContext({
  about: {},
  values: [],
  articles: [],
  message: [],
});

const contextFields = ["about", "values", "articles", "message"];

const SanityApiContextProvider = ({ children }) => {
  const [data, setData] = useState({
    about: {},
    values: [],
    articles: [],
    message: [],
  });

  useEffect(() => {
    const query = `*[_type == "language"]`;
    client.fetch(query).then((info) => {
      console.log(info);
    });
    contextFields.forEach((field) => {
      const query = `*[_type == "${field}"]`;
      client.fetch(query).then((info) =>
        setData((prevData) => {
          if (field === "about") {
            const paragraphs = [...info[0]?.paragraphs];
            return {
              ...prevData,
              about: {
                ...info[0],
                paragraphs: paragraphs.sort(
                  (a, b) => parseFloat(a.id) - parseFloat(b.id)
                ),
              },
            };
          }
          if (field === "values") {
            const values = [...info];
            return {
              ...prevData,
              values: values.sort(
                (a, b) => parseFloat(a.id) - parseFloat(b.id)
              ),
            };
          }
          if (field === "articles") {
            const articles = [...info];
            const transformedArticles = articles
              .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
              .map((article) => {
                return {
                  ...article,
                  paragraphs: article.paragraphs
                    ? article.paragraphs.sort(
                        (a, b) => parseFloat(a.id) - parseFloat(b.id)
                      )
                    : [],
                };
              });
            return {
              ...prevData,
              articles: transformedArticles,
            };
          }
          if (field === "message") {
            return {
              ...prevData,
              message: info,
            };
          }
        })
      );
    });
  }, []);

  const { about, values, articles, message } = data;

  const contextValue = {
    about,
    values,
    articles,
    message,
  };

  return (
    <sanityApiContext.Provider value={contextValue}>
      {children}
    </sanityApiContext.Provider>
  );
};

export default SanityApiContextProvider;
