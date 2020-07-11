import React, { Component } from "react";
import "./Hello.css";

// class based component
/* class Hello extends Component {
    render(){
        return(
            <div className="f1 tc">
                <h1>Hello World</h1>
                <p>Welcome to React</p>
            </div>
        )
    }
} */

//function based component

const Hello = (props) => {
  return (
    <div className="f1 tc">
      <h1>Hello World</h1>
      <p>{props.greetings}</p>
    </div>
  );
};

export default Hello;
