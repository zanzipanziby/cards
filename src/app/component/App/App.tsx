import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "common/hooks";
import style from "./App.module.css";
import "react-toastify/dist/ReactToastify.css";
import { Appbar } from "app/component/App/Toolbar/Appbar";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";
import { isLoadingSelect } from "../../app.selectors";
import { GlobalError } from "../../../common/components/GlobalError/GlobalError";
import LinearProgress from "@mui/material/LinearProgress";
import { authActions } from "../../../features/auth/auth.slice";
import { isLoggedInSelect } from "../../../features/auth/auth.selectors";

function App() {
  const isLoading = useAppSelector(isLoadingSelect);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(isLoggedInSelect);

  useEffect(() => {
    dispatch(authActions.authorization({}))
      .unwrap()
      .then(() => {
        navigate(`packs-list`);
      })
      .catch(() => {
        navigate(`login`);
      });
  }, []);

  return (
    <div className={style.App}>
      <Appbar />
      {isLoading ? <LinearProgress /> : <div style={{ height: "4px" }}></div>}
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
