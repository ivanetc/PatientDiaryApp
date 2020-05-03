import React from "react";
import RadioQuestion from "./RadioQuestion";
import CheckboxQuestion from "./CheckboxQuestion";
import FreeFormQuestion from "./FreeFormQuestion";
import SliderQuestion from "./SliderQuestion";

const Question = props => {
  switch (props.question.type) {
    case 'radio':
      return (
        <RadioQuestion question={props.question.text} answers={props.question.answers}/>
      );
    case 'checkbox':
      return (
        <CheckboxQuestion question={props.question.text} answers={props.question.answers}/>
      );
    case 'textarea':
      return (
        <FreeFormQuestion label={props.question.text} name='temp'/>
      );
    case 'slider':
      return (
        <SliderQuestion question={props.question.text} answers={props.question.answers}/>
      );
    default:
      return <div>Invalid type of question</div>;
  }
}

export default Question;