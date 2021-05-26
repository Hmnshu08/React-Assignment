import React, { Component } from 'react'

class EventBind extends Component {


    constructor(props){
        super(props)

        this.state = {
            message : 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
        // third approach
        // better approach
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'GoodBye!'
    //     })
    //     // console.log(this);
    // }

    clickHandler= () =>{
        this.setState({
            message: 'GoodBye!!'
        })
    }

    render() {
        return (
            <div>

                {/* <button onClick={this.clickHandler.bind(this)} className="btn btn-secondary">Click</button> */}
                {/* arrow method approach*/}
                {/* <button onClick={() => this.clickHandler()} className="btn btn-secondary">Click</button> */}
                {/* binding in constructor best option */}
                {/* <button onClick={this.clickHandler} className="btn btn-secondary">Click</button> */}
                <button onClick={this.clickHandler} className="btn btn-secondary">Click</button>
                <div>{this.state.message}</div>
            </div>
        )
    }
}

export default EventBind
