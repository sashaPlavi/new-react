import React from "react";

const person = props => {
  return (
    <div>
      <p>
        i am {props.name} and I am {Math.floor(Math.random() * 40)}years old{" "}
      </p>
      <p>{props.children}</p>
    </div>
  );
};
export default person;
