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

  let language = sessionStorage.lng;

  const [languages, setLanguages] = useState({
    language,
    languageData: {},
    languages: [],
  });

  useEffect(() => {
    const query = `*[_type == "language"]`;
    client.fetch(query).then((info) => {
      console.log(info);
      const languagesFromApi = info?.map((lng) => {
        return {
          about: {
            ...lng?.about,
            paragraphs: lng?.about?.paragraphs.sort(
              (a, b) => parseFloat(a.id) - parseFloat(b.id)
            ),
          },
          articles: lng?.articles
            .sort((a, b) => parseFloat(a.id) - parseFloat(b.id))
            .map((article) => {
              return {
                ...article,
                paragraphs: article?.paragraphs
                  ? article.paragraphs.sort(
                      (a, b) => parseFloat(a.id) - parseFloat(b.id)
                    )
                  : [],
              };
            }),
          values: lng?.values.sort(
            (a, b) => parseFloat(a.id) - parseFloat(b.id)
          ),
          successMessage: lng?.successMessage,
          errorMessage: lng?.errorMessage,
          flag: lng?.flag,
          ltr: lng?.isLeftToRight,
          lng: lng?.language?.toLowerCase(),
          legalText: lng?.legalText,
          title: lng?.mainTitle,
          subtitle: lng?.subtitle,
        };
      });
      setLanguages((prev) => {
        let lng =
          !prev.language || prev.language === "hebrew"
            ? "hebrew"
            : prev.language.toLowerCase();

        const requestedLng = languagesFromApi?.find(
          (language) => language?.lng === lng
        );

        return {
          ...prev,
          languageData: { ...requestedLng },
          languages: [...languagesFromApi],
        };
      });
    });

    // dont use
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

  console.log(languages.languageData);
  console.log(data);

  const { about, values, articles, message } = data;

  const contextValue = {
    // about,
    // values,
    // articles,
    // articles: languages?.languageData?.articles,
    // about: languages?.languageData?.about,
    // values: languages?.languageData?.values,
    ...languages.languageData,
    language: languages.language,
    // message,
  };

  return (
    <sanityApiContext.Provider value={contextValue}>
      {children}
    </sanityApiContext.Provider>
  );
};

export default SanityApiContextProvider;
