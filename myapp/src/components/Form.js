import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }
    }

    handlerUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleSubmit= (event) =>{
        alert(`${this.state.username}`);
        event.preventDefault()
    }


    render() {
        return (
            <div className="container">
                <div class="form-row">
                    <div class="form-group col-md-3">
                        <form onSubmit={this.handleSubmit}>
                            <label for="username">Username</label>
                            <input type="text" className="form-control" value={this.state.username} onChange={this.handlerUsernameChange}></input>
                            <button type="submit" className="btn btn-success">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
