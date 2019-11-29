import React from "react";
import "./charComponent.css";

const charComponent = props => {
  console.log(props);

  return (
    <div className="charComponent" onClick={props.remouve}>
      {props.charel}
    </div>
  );
};

export default charComponent;
