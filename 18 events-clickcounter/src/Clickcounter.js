import React from "react";

export default class Clickcounter extends React.Component{
    state ={
        count : 0,
    }

    OneMore = e =>{
        this.setState({
            count: this.state.count +1
        })
    }

    render() {
        return (
            <>
            <h1>Counter: {this.state.count} </h1>
            <button onClick={this.OneMore}>Click</button>
            </>
        )
    }
}