import React from 'react';
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Select = props => {
  const options = props.answers.map(ans => <FormControlLabel value={ans} control={<Radio />} label={ans}/>);

  return (
    <FormControl>
      <FormLabel>{props.question}</FormLabel>
      <RadioGroup name='radio'>
        {options}
      </RadioGroup>
    </FormControl>
  );
};

export default Select;
