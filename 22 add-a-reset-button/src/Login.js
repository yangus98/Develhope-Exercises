import React from "react"

export default class Login extends React.Component {
    onLogin = (event) => {
        event.preventDefault();
    let memorizedValues = {
        name: this.props.text,
        password: this.props.pass,
    }
    console.log(memorizedValues)
    }

    onReset = (event) => {
        event.preventDefault();
        this.props.input.current.value = ""
        this.props.input2.current.value = ""
    };


    render(){
        return(
            <>
            <button disabled={!this.props.text || !this.props.pass} onClick={this.onLogin}>Login</button>
            <button disabled={!this.props.text || !this.props.pass} onClick={this.onReset}>Reset</button>
            </>
        )
    }
}