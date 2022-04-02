import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CookiesProvider } from "react-cookie";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <Auth0Provider
    domain="dev-usqdltow.us.auth0.com"
    clientId="TfRC4PDC6adkwjnAicrDq8oXD1hlHKBj"
    redirectUri={window.location.origin}
    audience="https://secure/api"
  >
    <CookiesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CookiesProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
