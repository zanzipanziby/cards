import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import mainLogo from "../../../assets/image/mainLogo.png";
import style from "app/component/App/Toolbar/Appbar.module.css";
import { ContentContainer } from "app/component/App/ContentContainer/ContentContainer";
import { SuperButton } from "common/components/SuperButton/SuperButton";
import { NavLink } from "react-router-dom";

export const Appbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={"secondary"}>
        <ContentContainer>
          <Toolbar className={style.toolbar}>
            <div>
              <img className={style.logo} src={mainLogo} alt="logo" />
            </div>
            <NavLink to={"/login"} style={{ display: "block" }}>
              <SuperButton title={"Sign in"} />
            </NavLink>
          </Toolbar>
        </ContentContainer>
      </AppBar>
    </Box>
  );
};
