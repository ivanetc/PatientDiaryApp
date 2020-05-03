import React from "react";
import Question from "./Question";
import Button from "@material-ui/core/Button";

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('ЖОПА' + this.state.value);
    event.preventDefault();
  }

  render() {
    const questions = Object.keys(this.props.questions).map(
      key => <Question handler={this.handleChange()} question={this.props.questions[key]}/>
      );
    return (
      <form onSubmit={this.handleSubmit}>
        {questions}
        <Button type={'submit'}>
          Отправить
        </Button>
      </form>
    );
  }
}

export default SurveyForm;