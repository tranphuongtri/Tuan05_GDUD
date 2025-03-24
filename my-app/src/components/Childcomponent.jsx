import React from "react";
class Childcomponent extends React.Component {
    render() {
        return (
            <>
                <h1>I just get from parent
                    value:{this.props.myProp}
                </h1>
            </>
        )
    }
}
export default Childcomponent;