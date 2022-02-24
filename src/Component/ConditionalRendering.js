import React, { Component } from 'react'

class ConditionalRendering extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true            
        }
    }
    

    render() {
        if(this.state.isLoggedIn){
            return <div>Hello Harshit</div> 
        }else{
            return <div>Fuck Off Hrishika</div>
        }
        
    }
}

export default ConditionalRendering

