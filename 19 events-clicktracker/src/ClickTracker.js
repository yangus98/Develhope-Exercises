import React from "react"

export default class ClickTracker extends React.Component{

    state = {
        registerButton: "no",
    }

    handleButtonClick = (event) => {
        let result = event.target.name;
        this.setState({
            registerButton: result
        })
    }

    render(){
        return(
            <>
            <h1>You pressed {this.state.registerButton} button</h1>
            <button name="first" onClick={this.handleButtonClick}>first</button>
            <button name="second" onClick={this.handleButtonClick}>second</button>
            <button name="third" onClick={this.handleButtonClick}>third</button>
            </>
        )
    }
}