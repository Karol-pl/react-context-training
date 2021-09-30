import React, { Component } from "react";
import LangContext from "../contexts/LangContext";
import { StyledButton } from "./Button.style";

class Button extends Component {
  static contextType = LangContext;

  render() {
    const text = this.context === "english" ? "Submit" : "Voorleggen";
    return <StyledButton>{text}</StyledButton>;
  }
}

export default Button;
