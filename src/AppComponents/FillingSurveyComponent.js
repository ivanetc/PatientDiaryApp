import React from "react";
import Header from "./HeaderComponent";
import SurveyForm from "./Survey/SurveyForm";
import Survey from "../DataClasses/survey";

function FillingSurveyComponent() {
  const survey = Survey.Survey;
  const surveyId = Object.keys(survey)[0];
  return (
      <div>
        <Header/>
        <h2>Заполнение опроса</h2>
        <p>Вставить сюдым опрос</p>
        <SurveyForm userId={0} surveyId={surveyId} questions={survey[surveyId].questions} />
      </div>
    );
}
export default FillingSurveyComponent;