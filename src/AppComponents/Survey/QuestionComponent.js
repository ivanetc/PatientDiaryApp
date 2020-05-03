import React from "react";
import Select from "./SelectComponent";

function Question(props) {
  switch (props.question.type) {
    case 'select':
      return (
        <Select question={props.question.label} answers={props.question.answers}/>
      );
    default:
      return <div>yoooo</div>;
  }
}

export default Question;