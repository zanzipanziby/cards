import { toast, ToastContainer } from "react-toastify";
import { useAppSelector } from "common/hooks";
import { errorSelect } from "../../../app/app.selectors";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../../../app/app.slice";

export const GlobalError = () => {
  const error = useAppSelector(errorSelect);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);
  useEffect(() => {
    setTimeout(() => {
      dispatch(appActions.setError({ error: null }));
    }, 2000);
  }, [error]);

  return (
    <ToastContainer
      position="bottom-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
