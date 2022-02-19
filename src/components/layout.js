import React from "react";
import { Container } from "react-bootstrap";

function layout(props) {
  return <Container>{props.children}</Container>;
}

export default layout;
