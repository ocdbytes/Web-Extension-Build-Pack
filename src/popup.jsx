import React from "react";
import { render } from "react-dom";

function PopUp() {
  return <div>Hello World</div>;
}

render(<PopUp />, document.getElementById("react-target"));
