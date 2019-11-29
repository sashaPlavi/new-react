import React from "react";
import "./charComponent.css";

const charComponent = props => {
  console.log(props);

  return <div className="charComponent">{props.charel}</div>;
};

export default charComponent;
