import React from "react";
import Question from "./Question";
import Button from "@material-ui/core/Button";
import Data from "../../DataClasses/Data"

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    if (target.type === 'checkbox' && !this.state.value[target.name]) {
      this.setState(
        prevState => ({
          value: {
            ...prevState.value,
            [target.name]: [target.value],
          }
        }));
    } else {
      this.setState(
        prevState => ({
          value: {
            ...prevState.value,
            [target.name]: target.type === 'checkbox' ? [...prevState.value[target.name], target.value] : target.value,
          }
        }));
    }
  }

  handleSubmit(event) {
    const props = this.props;
    Data.Data.addSurveyResult(props.userId, props.surveyId, this.state.value);
    event.preventDefault();
  }

  render() {
    const questions = Object.keys(this.props.questions).map(
      key => <Question handler={this.handleChange} question={this.props.questions[key]} id={key}/>
    );
    return (
      <div className={'all_surveys'}>
        <form onSubmit={this.handleSubmit}>
          {questions}
          <Button type={'submit'}>
            Отправить
          </Button>
        </form>
      </div>
    );
  }
}

export default SurveyForm;