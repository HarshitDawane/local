import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


class ParentCompoment extends Component {

    constructor(props){

        super(props)
        this.state = {
                parentname: 'Parent'
        }
         this.greetparent = this.greetparent.bind(this)
    }

    greetparent(){

        this.setState({
            parentname: 'Harshit'
        })
        // alert(
        //     `Hola Amigos ${this.state.parentname}`
        // )
    }
        

    render() {
        return (
            <div>
            <h3>{this.state.parentname}</h3>
                <ChildComponent greetHandler = {this.greetparent}/>
            </div>
        )
    }
}

export default ParentCompoment
