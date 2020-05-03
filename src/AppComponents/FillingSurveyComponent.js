import React from "react";
import Header from "./HeaderComponent";
import SurveyForm from "./Survey/SurveyForm";
import Survey from "../DataClasses/survey"

function FillingSurveyComponent() {

  return (
      <div>
        <Header/>
        <h2>Заполнение опроса</h2>
        <p>Вставить сюдым опрос</p>
        <SurveyForm questions={Survey.Survey[0].questions} />
      </div>
    );
}
export default FillingSurveyComponent;