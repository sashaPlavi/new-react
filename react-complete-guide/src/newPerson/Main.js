import React from "react";
import DasPerson from "./DasPerson/DasPerson";
import "./Main.css";
import Validation from "./DasPerson/Validation";
import CharComponent from "./DasPerson/charComponent";
class Main extends React.Component {
  state = {
    persons: [
      {
        name: "sasa",
        age: 37
      },
      {
        name: "mirka",
        age: 27
      },
      {
        name: "mirko",
        age: 17
      }
    ],

    wiew: { show: true },
    input: 0,
    text: ""
  };

  toglehandel = () => {
    if (this.state.wiew.show) {
      this.setState({
        wiew: { show: false }
      });
    } else {
      this.setState({
        wiew: { show: true }
      });
    }
  };
  deletePersonHendler = personIndex => {
    //slice method makes a copy so it does not change original aray
    //const persons = this.state.persons.slice('');
    const persons = this.state.persons;
    //or
    // const persons = [...this.state.persons];
    //console.log(persons);

    persons.splice(personIndex, 1);
    this.setState(persons);
  };
  changeHandelr = event => {
    let input = event.target.value;
    let num = input.length;

    this.setState({ text: input });

    if (this.state.input !== num) {
      this.setState({
        input: num
      });
    }
  };
  render() {
    let persons = null;

    if (this.state.wiew.show) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <DasPerson
                delete={() => this.deletePersonHendler(index)}
                name={person.name}
                age={person.age}
                key={index}
              />
            );
          })}
        </div>
      );
    }
    let individual = null;

    const text = this.state.text.split("");
    console.log(text);

    individual = text.map((e, ind) => {
      return <CharComponent charel={e} key={ind} />;
    });

    return (
      <div className="main">
        <button onClick={this.toglehandel}>show persons</button>
        <p>good evening</p>
        {persons}
        <input type="text" onChange={this.changeHandelr} />
        <Validation charlng={this.state.input} />
        {individual}
      </div>
    );
  }
}
export default Main;
