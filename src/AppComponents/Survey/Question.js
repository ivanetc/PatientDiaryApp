import React from "react";
import RadioQuestion from "./RadioQuestion";
import CheckboxQuestion from "./CheckboxQuestion";
import FreeForm from "./FreeForm";
import SliderQuestion from "./SliderQuestion";

const Question = props => {
  switch (props.question.type) {
    case 'radio':
      return (
        <RadioQuestion question={props.question.label} answers={props.question.answers}/>
      );
    case 'checkbox':
      return (
        <CheckboxQuestion question={props.question.label} answers={props.question.answers}/>
      );
    case 'textarea':
      return (
        <FreeForm />
      );
    case 'slider':
      return (
        <SliderQuestion question={props.question.label} />
      );
    default:
      return <div>yoooo</div>;
  }
}

export default Question;