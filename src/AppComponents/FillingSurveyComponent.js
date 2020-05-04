import React from "react";
import Header from "./HeaderComponent";
import SurveyForm from "./Survey/SurveyForm";
import Survey from "../DataClasses/survey";
import Paper from "@material-ui/core/Paper";

function FillingSurveyComponent(prop) {
  const surveyId = prop.match.params.id;
  const AllSurveys = Survey.Survey;
  let currentSurvey = AllSurveys[surveyId];
  return (
      <div className="app_body">
          <Paper className="all_charts">
              <h2 className="profile_header">Заполнение опроса "{currentSurvey.name}"</h2>
              <span className="survey_description">Описание: {currentSurvey.description}</span>
              <SurveyForm userId={0} surveyId={surveyId} questions={currentSurvey.questions} />
          </Paper>
      </div>
    );
}
export default FillingSurveyComponent;