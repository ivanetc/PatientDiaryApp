import React from "react";
import Header from "./HeaderComponent";
import Survey from "./Survey/SurveyComponent";

function FillingSurveyComponent() {

  const questions = [
    {
      type: 'radio',
      label: 'Вопрос 1',
      answers: ['ответ 1', 'ответ 2', 'ответ 3'],
    },
    {
      type: 'slider',
      label: 'Вопрос 2',
      answers: [0, 2, 4, 6, 8, 10],
    },
    {
      type: 'checkbox',
      label: 'Вопрос 3',
      answers: ['ответ 1', 'ответ 2', 'ответ 3'],
    },
    {
      type: 'textarea',
      label: 'Вопрос 4',
    }

  ];
  return (
      <div>
        <Header/>
        <h2>Заполнение опроса</h2>
        <p>Вставить сюдым опрос</p>
        <Survey questions={questions} />
      </div>
    );
}
export default FillingSurveyComponent;