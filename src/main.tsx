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
      domain="dev-hl81st48h1jq5wqi.eu.auth0.com"
      clientId="XOuL087Yhcd4PVCkmV6z0RvuQUyB9zAq"
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
