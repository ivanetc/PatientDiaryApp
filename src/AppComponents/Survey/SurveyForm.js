import React from "react";
import Question from "./Question";
import Button from "@material-ui/core/Button";
import Data from "../../DataClasses/Data"
import history from '../../history';
import {withRouter} from "react-router-dom";
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
    event.preventDefault();
    let result = Data.Data.addSurveyResult(this.props.userId, this.props.surveyId, this.state.value);
    console.log(result);
    history.push('/daily_plan/result_survey' + this.props.surveyId + '/'+result, this.state);
    // history.go();
    // this.render(<SurveyResultComponent/>)
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

export default withRouter(SurveyForm);