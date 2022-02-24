import React, {Component} from 'react'

// function Functionclick() {
//         function clickHandler(){
//             console.log('Button Clicked')
//         }
//     return (
//         <div>
//             <button onClick={clickHandler}>Click Me</button>
//         </div>
//     )
// }

class Functionclick extends Component {
    
    clickHandler(){

        console.log('button clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default Functionclick
