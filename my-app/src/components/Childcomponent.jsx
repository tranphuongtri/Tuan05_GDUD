import React from "react";
class Childcomponent extends React.Component {
    render() {
        return (
            <>
                <h1>
                    I just get from parent
                    value:{this.props.myProp}
                    call function Sum: 6+7={this.props.sum(6, 7)}
                </h1>
            </>
        )
    }
}
export default Childcomponent;