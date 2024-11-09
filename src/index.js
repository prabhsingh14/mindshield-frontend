import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';
import { Toaster } from "react-hot-toast";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-e2nqz51uqjzdls72.us.auth0.com"
      clientId="jTYBLvnEJ0vD7QsgHih7LjAG82kUqLnP"
      authorizationParams={{
        redirect_uri: `${window.location.origin}/dashboard`
      }}
    >
      <App />
      <Toaster />
    </Auth0Provider>
  </BrowserRouter>
);