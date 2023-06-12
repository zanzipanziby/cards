import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import style from "./App.module.css";
import { Appbar } from "app/component/App/Toolbar/Appbar";
import { Outlet, redirect } from "react-router-dom";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";
import { isLoadingSelect } from "../../app.selectors";
import { isLoggedInSelect } from "../../../features/auth/auth.selectors";

function App() {
  const isLoading = useAppSelector(isLoadingSelect);
  const isLoggedIn = useAppSelector(isLoggedInSelect);
  //todo убрать isRegistered из стейта

  const dispatch = useAppDispatch();

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   dispatch(appActions.setIsLoading({ isLoading: false }));
    // }, 3000);
    // return () => clearTimeout(timeoutId);

    //todo дописать запрос authMe

    if (isLoggedIn) {
      redirect(`profile`);
    } else {
      redirect(`login`);
    }
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
