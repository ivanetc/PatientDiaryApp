import React from "react";
import RadioQuestion from "./RadioQuestion";
import CheckboxQuestion from "./CheckboxQuestion";
import FreeFormQuestion from "./FreeFormQuestion";
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
        <FreeFormQuestion label={props.question.label} name='temp'/>
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