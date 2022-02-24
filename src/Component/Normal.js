import React, { Component } from 'react';

// const Normal = props => {
//     const {name} = props
//     return(
//         <div>
//           <h3>Hello i am {name}</h3>
//         </div>
//     )

// }

class Normal extends Component{
    render(){
        const{name} = this.props
        return(
            <div>
                <h2>
                    Hi this is {this.props.name}
                </h2>
            </div>
        )
    }
}

export default Normal