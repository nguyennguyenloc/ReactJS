import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextField";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button fontsize2x primary>
          Hello Lộc
        </Button>
        <Button>You are awesome!</Button>
        <SmallButton>Hello SmallButton</SmallButton>
        <StyledLink id="abc" name="abc123">
          Styled Link
        </StyledLink>
        <TextField inputColore="green"></TextField>
      </div>
    );
  }
}
