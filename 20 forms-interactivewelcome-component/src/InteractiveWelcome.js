import React from "react";
import Welcome from "./Welcome"

export default class InteractiveWelcome extends React.Component{
    state = {
        inputText: "",
    }

    handleTextbox = (event) => {
        let change = event.target.value;
        this.setState({
            inputText: change
        })

    }

    render(){
        return (
            <>
            <input type="text" onChange={this.handleTextbox}/>
            <Welcome name={this.state.inputText}/>
            </>
        )
    }
}