import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import mainLogo from "../../../assets/image/mainLogo.png";
import style from "app/component/App/Toolbar/Appbar.module.css";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { NavLink } from "react-router-dom";
import { profileSelect } from "../../../../features/auth/auth.selectors";
import { useSelector } from "react-redux";
import { MenuComponent } from "../../../../common/components/Menu/Menu";

export const Appbar = () => {
  const profile = useSelector(profileSelect);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <ContentContainer>
          <Toolbar className={style.toolbar}>
            <div>
              <img className={style.logo} src={mainLogo} alt="logo" />
            </div>
            {profile ? (
              <MenuComponent />
            ) : (
              <NavLink to={"/login"} style={{ display: "block" }}>
                <SuperButton title={"Sign in"} />
              </NavLink>
            )}
          </Toolbar>
        </ContentContainer>
      </AppBar>
    </Box>
  );
};
