import React from "react";

export default class UncontrolledLogin extends React.Component {
  render(){
    return (
      <>
      <button type="submit" disabled={!this.props.name || !this.props.password}>Login</button>
      <button type="reset" disabled={!this.props.name || !this.props.password}>Reset</button>
      <button type="button" onClick={this.props.form}>Prefill form</button>
      </>
    )
  }
}