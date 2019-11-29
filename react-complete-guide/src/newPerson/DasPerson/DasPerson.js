import React from "react";
import "./DasPerson.css";
const DasPerson = props => {
  // console.log(props);

  return (
    <div className="dasPerson">
      <p>
        name: {props.name} age: {props.age}
      </p>
      <button onClick={props.delete}>delete person</button>
      <p>sagen:</p>
      <p>Ich bin das Person !</p>
    </div>
  );
};

export default DasPerson;
