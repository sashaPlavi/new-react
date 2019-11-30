import React from "react";

const Validation = props => {
  if (props.charlng < 5) {
    return (
      <div>
        <p>text is to short</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>text is long enough</p>
      </div>
    );
  }
};

export default Validation;
