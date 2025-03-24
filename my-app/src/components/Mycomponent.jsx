import React from "react";
import Childcomponent from "./Childcomponent";
class Mycomponent extends React.Component {
    state = {
        Name: 'Eric',
        Age: 28,
        Address: 'HCM'
    }
    sum = (a, b) => {
        return a + b;
    }
    render() {
        let parents = "This is my parent";

        return (
            <div>
                <Childcomponent myProp={parents}
                    sum={this.sum}></Childcomponent>
                My name is: {this.state.Name}
                <br />
                My age is: {this.state.Age}</div>

        )
    }
}
export default Mycomponent;


