import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment() {
        // this.state.count += 1;
        // console.log(this.state.count);
        //this will change the output but not the ui so do not use directly the this.state 

        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('callback value ', this.state.count)
            }
        )
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button class="btn btn-primary" onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Count
