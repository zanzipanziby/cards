import { createBrowserRouter } from "react-router-dom";
import App from "app/component/App/App";
import React from "react";
import { SignIn } from "features/auth/components/SignIn/SignIn";
import { SignUp } from "features/auth/components/SignUp/SignUp";
import { NewPassword } from "features/auth/components/NewPassword/NewPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/forgot-password",
        element: <NewPassword />,
      },
    ],
  },
]);
