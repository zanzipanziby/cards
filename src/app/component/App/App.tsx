import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { appActions } from "app/app.slice";
import style from "./App.module.css";
import { Appbar } from "app/component/App/Toolbar/Appbar";

function App() {
  const isLoading = useAppSelector((state) => state.app.isLoading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(appActions.setIsLoading({ isLoading: false }));
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={style.App}>
      {/*{isLoading && <h1>Loader...</h1>}*/}
      <Appbar />
    </div>
  );
}

export default App;
