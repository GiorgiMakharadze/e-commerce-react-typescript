import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context.tsx";
import { CartProvider } from "./context/cart_context.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/user_context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH_DOMAIN || ""}
      clientId={process.env.REACT_APP_CLIENT_ID || ""}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
);
