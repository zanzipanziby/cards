import React from "react";
type DescriptionComponentPropsType = {
  title: string;
  textAlign?: "right" | "left" | "center";
};
export const DescriptionComponent = (props: DescriptionComponentPropsType) => {
  const lines = props.title.split("\n");
  return (
    <p style={{ textAlign: props.textAlign, color: "#7e7d7d" }}>
      {lines.map((el) => (
        <div>{el}</div>
      ))}
    </p>
  );
};
