import React, { Component } from 'react'


class RefsDemo extends Component {


    constructor(props) {
        super(props)
        this.inputRef = React.createRef()

    }

    componentDidMount() {
        this.inputRef.current.focus() 
        //input focus on loading
        console.log(this.inputRef)
    }

    clickHandler= () =>{
        alert(this.inputRef.current.value);
    }


    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
