import React from "react";
import DasPerson from "./DasPerson/DasPerson";

class Main extends React.Component {
  state = { show: true };

  toglehandel = () => {
    if (this.state.show) {
      this.setState({
        show: false
      });
    } else {
      this.setState({
        show: true
      });
    }
  };
  render() {
    let persons = null;

    if (this.state.show) {
      persons = (
        <div>
          <DasPerson />
          <DasPerson />
          <DasPerson />
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.toglehandel}>show persons</button>
        <p>good evening</p>
        {persons}
      </div>
    );
  }
}
export default Main;
