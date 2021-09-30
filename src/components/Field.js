import React, { Component } from "react";
import { StyledInput } from "./Field.style";

class Field extends Component {
  render() {
    return (
      <>
        <label>Name</label>
        <StyledInput type="text" />
      </>
    );
  }
}

export default Field;
