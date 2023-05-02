import React from "react";
import Container from "@mui/material/Container";

type ContentContainer = {
  children: React.ReactNode;
};

export const ContentContainer = (props: ContentContainer) => {
  return <Container maxWidth={"xl"}>{props.children}</Container>;
};
