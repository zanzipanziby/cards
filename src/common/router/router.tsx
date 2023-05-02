import { createBrowserRouter } from "react-router-dom";
import App from "app/component/App/App";
import { Login } from "features/auth/components/Login/Login";
import React from "react";
import { Register } from "features/auth/components/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
