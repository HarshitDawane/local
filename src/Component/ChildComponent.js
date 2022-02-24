import React, { Component } from 'react'

class ChildComponent extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.greetHandler}>Child Component</button>
            </div>
        )
    }
}

export default ChildComponent
