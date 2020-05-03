import React from "react";
import Question from "./QuestionComponent";

function Survey(props) {
  const questions = props.questions.map(question => <Question question={question}/>);
  return (
    <div>
      {questions}
    </div>
  );
}

export default Survey;