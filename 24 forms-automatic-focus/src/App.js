import React, {createRef} from "react";
import UncontrolledLogin from "./UncontrolledLogin"

export default class App extends React.Component {
    _formRef = createRef()

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value

        console.log({username,password})
    }

  state = {
    name: "",
    password: "",
  };

  handleFormPrefill = () => {
    this._formRef.current.elements.username.value = "Johnny"
    this._formRef.current.elements.password.value = "12345"
  }

  autoComplete = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  autoComplete2 = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <>
        <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
          <input autoFocus name="username" type="text" onChange={this.autoComplete} />
          <input name="password" type="password" onChange={this.autoComplete2} />

          <UncontrolledLogin name={this.state.name} password={this.state.password} form={this.handleFormPrefill}/>
        </form>
      </>
    );
  }
}