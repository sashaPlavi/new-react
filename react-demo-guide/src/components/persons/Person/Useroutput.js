import React from "react";
import "./Useroutput.css";

const Useroutput = props => {
  console.log(props);
  const style = {
    border: "2px black solid"
  };

  return (
    <div className="Useroutput">
      <p>{props.credo}</p>

      <p style={style}>{props.credo}</p>
    </div>
  );
};

export default Useroutput;
