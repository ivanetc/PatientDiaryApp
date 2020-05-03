import React from "react";
import Select from "./SelectComponent";

class Question extends React.Component {
  render() {
    switch (this.props.question.type) {
      case 'select':
        return (
          <Select question={this.props.question.label} answers={this.props.question.answers}/>
        );
      default:
        return <div>yoooo</div>;
    }
  }
}

export default Question;