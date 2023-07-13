import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import MainPortfolio from "./page/MainPortfolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/folderpt",
    element: <MainPortfolio />,
  },
  {
    path: "/chromept",
    element: <MainPortfolio />,
  },
  {
    path: "/vspt",
    element: <MainPortfolio />,
  },
  {
    path: "/notept",
    element: <MainPortfolio />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />,
);
