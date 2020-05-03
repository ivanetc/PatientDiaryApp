import React from 'react';


const Select = props => {
  const options = props.answers.map(ans => <option key={ans.toString()} value={ans}>{ans}</option>);

  return (
    <div>
      <label htmlFor={'id_select'}>{props.question}</label>
      <select id={'id_select'}>
        {options}
      </select>
    </div>
  );
}

export default Select;
