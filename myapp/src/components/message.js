import React, { Component } from 'react'
//class component
class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }


    //function changeMessage
    changeMessage(){
        this.setState({
            message:'Thank u for Subscription!!!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button class="btn btn-primary" onClick={() => this.changeMessage()}  type="submit">Subscribe</button>
            </div>
        )
    }
}

export default Message;