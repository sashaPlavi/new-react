import React from "react";
import "./Person.css";
const person = props => {
  console.log(props);

  return (
    <div className="Person">
      <p onClick={props.click}>
        i am {props.name} and I am {Math.floor(Math.random() * 40)}years old{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};
export default person;
