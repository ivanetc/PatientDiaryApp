import React from "react";
import Header from "./HeaderComponent";
import Survey from "./Survey/SurveyComponent";
import FreeForm from "./Survey/FreeForm";

function FillingSurveyComponent() {

  const questions = [
    {
      type: 'select',
      label: 'Вопрос 1',
      answers: ['ответ 1', 'ответ 2', 'ответ 3'],
    },
    {
      type: 'select',
      label: 'Вопрос 2',
      answers: ['ответ 1', 'ответ 2', 'ответ 3'],
    },
    {
      type: 'select',
      label: 'Вопрос 3',
      answers: ['ответ 1', 'ответ 2', 'ответ 3'],
    },

  ];
  return (
      <div>
        <Header/>
        <h2>Заполнение опроса</h2>
        <p>Вставить сюдым опрос</p>
        <FreeForm label='temp' name='temp' />
        <Survey questions={questions} />
      </div>
    );
}
export default FillingSurveyComponent;