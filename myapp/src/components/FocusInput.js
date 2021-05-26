import React, { Component } from 'react'
import RefClassDemo from './RefClassDemo'

class FocusInput extends Component {

    constructor(props) {
        super(props)
    
        this.componentRef = React.createRef()
    }
    
    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }

    render() {
        return (
            <div>
                <RefClassDemo ref={this.componentRef}></RefClassDemo>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
