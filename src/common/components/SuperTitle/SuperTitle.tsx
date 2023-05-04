import React from "react";

type SuperTitlePropsType = {
  style?: React.CSSProperties;
  title: string;
};
const SuperTitle = (props: SuperTitlePropsType) => {
  return <h2 style={props.style}>{props.title}</h2>;
};

export default SuperTitle;
