import React from 'react';
import ReactDOM from 'react-dom';


const Select = ({ answers }) => {
  const options = answers.map(ans => <option key={ans.toString()} value={ans}>{ans}</option>);

  return (
    <select>
      {options}
    </select>
  );
}

const options = ['yoooo', 'boooo', 'kiya'];

ReactDOM.render(
  <Select answers={options}/>,
  document.getElementById('root')
);
