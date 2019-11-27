import React, { useState } from "react";

import "./App.css";
import Person from "./Person/person";

const App = props => {
  const [statepersons, updatepersons] = useState({
    persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }]
  });
  console.log(statepersons.persons[0].name);

  const swichnameHandler = namee => {
    // console.log("bla");
    if (statepersons.persons[0].name === "Sale") {
      updatepersons({
        persons: [{ name: namee }, { name: "Mirjana" }, { name: "Miroslav" }]
      });
    } else {
      updatepersons({
        persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }]
      });
    }
  };
  return (
    <div className="App">
      <h1>good evening ladies and gentlemen !!!</h1>
      <button
        // pasin data with bind() onClick={swichnameHandler.bind(this, "slavko")}>
        //pasing data with anonimus function
        onClick={() => {
          swichnameHandler("slavko!!");
        }}
      >
        swich name
      </button>
      <Person name={statepersons.persons[0].name} />
      <Person click={swichnameHandler} name={statepersons.persons[1].name}>
        {" "}
        my hobi is rasing
      </Person>
      <Person name={statepersons.persons[2].name} />
    </div>
  );
};
export default App;
/*
 */
