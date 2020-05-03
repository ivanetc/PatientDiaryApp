import React from "react";
import Header from "./HeaderComponent";
import SurveyWindow from "./Survey/SurveyWindow";
import Survey from "../DataClasses/survey"

function FillingSurveyComponent() {

  return (
      <div>
        <Header/>
        <h2>Заполнение опроса</h2>
        <p>Вставить сюдым опрос</p>
        <SurveyWindow questions={Survey.Survey[0].questions} />
      </div>
    );
}
export default FillingSurveyComponent;