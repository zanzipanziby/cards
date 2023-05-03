import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { useEffect } from "react";
import { appActions } from "app/app.slice";
import style from "./App.module.css";
import { Appbar } from "app/component/App/Toolbar/Appbar";
import { Outlet } from "react-router-dom";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";

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
      <ContentContainer>
        <div className={style.align}>
          <Outlet />
        </div>
      </ContentContainer>
    </div>
  );
}

export default App;
