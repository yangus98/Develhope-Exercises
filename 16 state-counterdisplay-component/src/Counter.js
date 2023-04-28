import React from "react";
import CounterDisplay from "./CounterDisplay"

export default class Counter extends React.Component {
    state ={
        counter: 0,
    }

    constructor(props){
        super(props)

        setInterval(() => {
            this.setState({
                counter: this.state.counter +1
            })
        }, 1000);
    }

  render() {
    return (
      <CounterDisplay count={this.state.counter}/>
    );
  }
}