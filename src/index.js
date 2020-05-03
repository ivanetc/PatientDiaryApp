import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Select from "./AppComponents/Survey/SelectComponent";

const options = ['yoooo', 'boooo', 'kiya'];

ReactDOM.render(
  <Select question={'Какой-то вопрос'} answers={options} />,
  document.getElementById('root')
);