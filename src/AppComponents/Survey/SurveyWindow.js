import React from "react";
import Question from "./Question";

function SurveyWindow(props) {
  const questions = Object.keys(props.questions).map(key => <Question question={props.questions[key]}/>);
  return (
    <div>
      {questions}
    </div>
  );
}

export default SurveyWindow;