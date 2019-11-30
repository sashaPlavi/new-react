import React, { useState } from "react";

import "./App.css";

import Person from "./Person";
import Userinput from "./Userinput";
import Useroutput from "./Useroutput";

const App = props => {
  const [statepersons, updatepersons] = useState({
    persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }],
    credo: "cogito ergo sum",
    showPesron: false
  });
  /*
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
*/

  const togleShowHendler = () => {
    console.log(statepersons.showPesron);

    if (statepersons.showPesron === true) {
      updatepersons({
        persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }],
        credo: "cogito ergo sum",
        showPesron: false
      });
    } else {
      updatepersons({
        persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }],
        credo: "cogito ergo sum",
        showPesron: true
      });
    }
  };
  const inputHendler = event => {
    console.log(event.target.value);

    updatepersons({
      persons: [
        { name: "Sale" },
        { name: event.target.value },
        { name: "Mirko" }
      ]
    });
  };
  const inputcredoHndler = event => {
    console.log(event.target.value);
    updatepersons({
      persons: [{ name: "Sale" }, { name: "Mirka" }, { name: "Mirko" }],
      credo: event.target.value
    });
  };

  return (
    <div className="App">
      <h1>good evening ladies and gentlemen !!!</h1>
      <button
        // pasin data with bind() onClick={swichnameHandler.bind(this, "slavko")}>
        //pasing data with anonimus function
        onClick={() => {
          //this is anomus function so we can call handler
          // swichnameHandler("slavko!!");
          togleShowHendler();
        }}
      >
        show name
      </button>

      {statepersons.showPesron ? (
        // ternary operator display div or null
        <div>
          <Person name={statepersons.persons[0].name} />
          <Person
            // click={swichnameHandler}
            name={statepersons.persons[1].name}
            changed={inputHendler}
          >
            {" "}
            my hobi is rasing
          </Person>
          <Person name={statepersons.persons[2].name} />
        </div>
      ) : null}
      <Userinput
        input={inputcredoHndler}
        curentstate={statepersons.credo}
      ></Userinput>
      <Useroutput credo={statepersons.credo}></Useroutput>
    </div>
  );
};

export default App;
/*
 */
