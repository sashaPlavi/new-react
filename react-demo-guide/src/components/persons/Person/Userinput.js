import React from "react";
import "./Userinput.css";

const Usereinpt = props => {
  //two way binding..
  return (
    <div className="Userinput">
      <input type="text" onChange={props.input} value={props.curentstate} />
    </div>
  );
};

export default Usereinpt;
