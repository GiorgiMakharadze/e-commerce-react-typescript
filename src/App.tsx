import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  HomePage,
  Products,
  SingleProduct,
  About,
  Error,
  Cart,
  Checkout,
  PrivateRoute,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <Error />,
      },
      {
        path: "about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <Error />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
