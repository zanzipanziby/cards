import { toast, ToastContainer } from "react-toastify";
import { useAppSelector } from "common/hooks";
import { errorSelect } from "../../../app/app.selectors";
import React from "react";

export const GlobalError = () => {
  const error = useAppSelector(errorSelect);

  if (error !== null) {
    console.log("error");
    toast.error(error);
  }
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};
