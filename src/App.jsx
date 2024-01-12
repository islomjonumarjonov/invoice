import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import SingleInvoice from "./pages/SingleInvoice";
import Create from "./pages/Create";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/singleInvoice",
          element: <SingleInvoice />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
