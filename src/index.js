import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "react-lazy-load-image-component/src/effects/blur.css";

import { BrowserRouter } from "react-router-dom";
import ScreenSizeContextProvider from "./store/screen-size-context";
import SanityApiContextProvider from "./store/sanity-api-context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ScreenSizeContextProvider>
      <SanityApiContextProvider>
        <App />
      </SanityApiContextProvider>
    </ScreenSizeContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
