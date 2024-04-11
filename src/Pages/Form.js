import React from "react";
import { FormLayoutWithCards } from "../Application/FormLayout/FormLayoutWithCards/App";
import { FormWithInlineLabels } from "../Application/FormLayout/FormWithInlineLabels/App";

function Form(props) {
  return (
    <>
      <FormLayoutWithCards />
      <FormWithInlineLabels />
    </>
  );
}

export default Form;
