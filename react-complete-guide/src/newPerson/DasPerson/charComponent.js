import React from "react";
import "./charComponent.css";

const charComponent = props => {
  const text = props.chartxt.split();
  console.log(typeof text);
  let individual = (
    <div>
      {text.map((e, ind) => {
        return (
          <p onClick={props.click} key={ind}>
            {e}
          </p>
        );
      })}
    </div>
  );

  return <div className="charComponent">{individual}</div>;
};

export default charComponent;
