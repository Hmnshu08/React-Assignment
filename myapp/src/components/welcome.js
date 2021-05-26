import React, { Component } from 'react'
//class component
class Welcome extends Component {
    render() {
        const { name, heroName } = this.props //desructuring props and state
        // return <h1> Class Component Welcome {this.props.name} Also Known as {this.props.heroName}</h1>
        return <h1> Class Component Welcome {name} Also Known as {heroName}</h1>
    }
}

export default Welcome;