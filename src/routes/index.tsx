import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import ProductsPage from "./products";
import Layout from "../components/Layout";
import PricePage from "./pricePlans";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          path: "/",
          element: <ProductsPage />,
        },
        {
          path: "/price",
          element: <PricePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
