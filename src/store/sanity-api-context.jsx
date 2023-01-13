import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { client } from "../client";

export const sanityApiContext = createContext({
  flag: "",
  lng: "",
  menu: "",
  title: "",
  subtitle: "",
  about: {},
  valuesTitle: "",
  values: [],
  articlesTitle: "",
  articleButton: "",
  articles: [],
  contactForm: {},
  successMessage: "",
  errorMessage: "",
  legalText: "",
  changeLanguageHandler: () => {},
});

const SanityApiContextProvider = ({ children }) => {
  const [languages, setLanguages] = useState({
    language: sessionStorage.getItem("lng"),
    languageData: {},
    languages: [],
  });

  useEffect(() => {
    const query = `*[_type == "language"]`;
    client.fetch(query).then((info) => {
      console.log("info", info);
      const languagesFromApi = info?.map((lng) => {
        return {
          about: {
            ...lng?.about,
            paragraphs: lng?.about?.paragraphs.sort(
              (a, b) => parseFloat(a.id) - parseFloat(b.id)
            ),
          },
          articlesTitle: lng?.articlesTitle,
          articleButton: lng?.articleButton,
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
          valuesTitle: lng?.valuesTitle,
          values: lng?.values.sort(
            (a, b) => parseFloat(a.id) - parseFloat(b.id)
          ),
          contactForm: lng?.contactForm,
          successMessage: lng?.successMessage,
          errorMessage: lng?.errorMessage,
          flag: lng?.flag,
          ltr: lng?.isLeftToRight,
          lng: lng?.language?.toLowerCase(),
          legalText: lng?.legalText,
          title: lng?.mainTitle,
          subtitle: lng?.subtitle,
          menu: lng?.menu,
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
          languageData: {
            ...requestedLng,
            lng: `${lng.charAt(0).toUpperCase()}${lng.slice(1)}`,
          },
          languages: [...languagesFromApi],
        };
      });
    });
  }, []);

  const changeLanguageHandler = (lng = "") => {
    if (languages.languages?.length === 1) {
      return;
    }
    if (languages.languages?.length === 2) {
      if (
        !languages.language ||
        languages.language?.toLowerCase() === "hebrew"
      ) {
        const languageData = languages.languages?.find(
          (language) => language.lng?.toLowerCase() !== "hebrew"
        );
        sessionStorage.setItem("lng", languageData?.lng);
        setLanguages((prev) => {
          return {
            ...prev,
            language: languageData?.lng,
            languageData,
          };
        });
      } else {
        const languageData = languages.languages?.find(
          (language) => language.lng?.toLowerCase() === "hebrew"
        );
        sessionStorage.setItem("lng", "hebrew");
        setLanguages((prev) => {
          return {
            ...prev,
            language: languageData?.lng,
            languageData,
          };
        });
      }
    } else {
    }
  };

  console.log(languages);

  const contextValue = {
    ...languages.languageData,
    language: languages.language,
    changeLanguageHandler,
  };

  return (
    <sanityApiContext.Provider value={contextValue}>
      {children}
    </sanityApiContext.Provider>
  );
};

export default SanityApiContextProvider;
