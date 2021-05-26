import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button!!!');
    }


    render() {
        return (
            <div>
                <br></br>
                <button onClick={this.clickHandler} className="btn btn-primary">Click Me</button>
            </div>
        )
    }
}

export default ClassClick
