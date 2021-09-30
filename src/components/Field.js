import React, { Component } from "react";
import LangContext from "../contexts/LangContext";
import { StyledInput } from "./Field.style";

class Field extends Component {
  static contextType = LangContext;
  render() {
    const text = this.context === "english" ? "Name" : "Naam";
    return (
      <>
        <label>{text}</label>
        <StyledInput type="text" />
      </>
    );
  }
}

export default Field;
