import React, { Component } from "react";
import LangContext from "../contexts/LangContext";
import { StyledButton } from "./Button.style";

class Button extends Component {
  static contextType = LangContext;

  render() {
    console.log(this.context);
    return <StyledButton>Submit</StyledButton>;
  }
}

export default Button;
