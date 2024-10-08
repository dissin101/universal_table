import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ProductsPage from "./products";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductsPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
