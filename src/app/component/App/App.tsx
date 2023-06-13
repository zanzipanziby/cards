import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import style from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Appbar } from "app/component/App/Toolbar/Appbar";
import { Outlet, useNavigate } from "react-router-dom";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";
import { isLoadingSelect } from "../../app.selectors";
import { GlobalError } from "../../../common/components/GlobalError/GlobalError";
import LinearProgress from "@mui/material/LinearProgress";
import { authActions } from "../../../features/auth/auth.slice";

function App() {
  const isLoading = useAppSelector(isLoadingSelect);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    //   dispatch(appActions.setIsLoading({ isLoading: false }));
    // }, 3000);
    // return () => clearTimeout(timeoutId);

    //todo дописать запрос authMe
    dispatch(authActions.authorization({}))
      .unwrap()
      .then(() => {
        navigate(`profile`);
      })
      .catch(() => {
        navigate(`login`);
      });
  }, []);

  return (
    <div className={style.App}>
      {/*{isLoading && <h1>Loader...</h1>}*/}
      <Appbar />
      {isLoading && <LinearProgress />}
      <ContentContainer>
        <div className={style.align}>
          <Outlet />
        </div>
      </ContentContainer>
      <GlobalError />
    </div>
  );
}

export default App;
