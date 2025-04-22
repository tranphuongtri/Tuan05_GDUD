import React from "react";
class Childcomponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueInput: "abc",
    };
  }
  handleInput = (event) => {
    this.setState({
      valueInput: event.target.value,
    });
  };
  handleOnchangeInput = (event) => {
    this.setState({
      Name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <h1>
          I just get from parent value:{this.props.myProp}
          call function Sum: 6+7={this.props.sum(6, 7)}
        </h1>
        <div>
          <input
            type="text"
            name=""
            id=""
            value={this.state.valueInput}
            onChange={(event) => {
              this.handleInput(event);
            }}
          />
        </div>
        <p>{this.state.valueInput}</p>
        <form action="" onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleOnchangeInput(event)}
          />
          <button>Submit</button>
        </form>
      </>
    );
  }
}
export default Childcomponent;
