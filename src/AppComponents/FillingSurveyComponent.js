
import React from "react";
import Header from "./HeaderComponent";
import FreeForm from "./Survey/FreeForm";

function FillingSurveyComponent(prop) {
    let surveyId = prop.match.params.id;
    let html =
        <div>
            <Header/>
            <h2>Заполнение опроса</h2>
            <p>Здесь будет опрос с id = {surveyId}</p>
            <FreeForm label='Введите свою температуру' name='Введите свою температуру' />
        </div>;


    return html;
}
export default FillingSurveyComponent;