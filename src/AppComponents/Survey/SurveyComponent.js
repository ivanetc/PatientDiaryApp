import React from "react";
import Question from "./QuestionComponent";

class Survey extends React.Component {
  render() {
    const questions = this.props.questions.map(question => <Question question={question}/>);
    return (
      <div>
        {questions}
      </div>
    );
  }
}

export default Survey;