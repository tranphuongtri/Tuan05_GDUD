import React from "react";
import Childcomponent from "./Childcomponent";
class Mycomponent extends React.Component {
  state = {
    Name: "Eric",
    Age: 28,
    Address: "HCM",
  };
  sum = (a, b) => {
    return a + b;
  };
  handleInput = (event) => {
    this.setState({ valueInput: event.target.value });
  };
  render() {
    let parents = "This is my parent";

    return (
      <div>
        <Childcomponent myProp={parents} sum={this.sum}></Childcomponent>
        My name is: {this.state.Name}
        <br />
        My age is: {this.state.Age}
        <br />
        <input
          type="text"
          value={this.state.valueInput}
          onChange={this.handleInput}
          placeholder="Gõ gì đó..."
        />
        <div>
          <span>{this.state.valueInput}</span>
        </div>
      </div>
    );
  }
}
export default Mycomponent;
