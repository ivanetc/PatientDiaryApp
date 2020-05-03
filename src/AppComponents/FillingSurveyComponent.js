import React from "react";
import Header from "./HeaderComponent";
import FreeForm from "./Survey/FreeForm";

function FillingSurveyComponent() {
    let html =
        <div>
            <Header/>
            <h2>Заполнение опроса</h2>
            <p>Вставить сюдым опрос</p>
            <FreeForm label='temp' name='temp' />
        </div>;


    return html;
}
export default FillingSurveyComponent;