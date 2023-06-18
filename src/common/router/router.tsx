import { createBrowserRouter } from "react-router-dom";
import App from "app/component/App/App";
import React from "react";
import { SignIn } from "features/auth/components/SignIn/SignIn";
import { SignUp } from "features/auth/components/SignUp/SignUp";
import { CheckEmail } from "features/auth/components/CheckEmail/CheckEmail";
import { Profile } from "common/components/Profile/Profile";
import { ForgotPassword } from "../../features/auth/components/ForgotPassword";
import { PacksList } from "../../features/packs/components/PacksList/PacksList";

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
        element: <ForgotPassword />,
      },
      {
        path: "/check-email",
        element: <CheckEmail />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/packs-list",
        element: <PacksList />,
      },
    ],
  },
]);
