import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Survey from "./AppComponents/Survey/SurveyComponent";

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

ReactDOM.render(
  <Survey questions={questions} />,
  document.getElementById('root')
);