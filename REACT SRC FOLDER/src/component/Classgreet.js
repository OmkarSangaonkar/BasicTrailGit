import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return <h1>{this.props.name} is playing in {this.props.club}</h1>
    }

}

export default Welcome

// VERYIMP : Props are immutable(cant assign new value)