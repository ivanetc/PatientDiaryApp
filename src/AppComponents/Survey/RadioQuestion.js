import React from 'react';
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const RadioQuestion = props => {
  const options = Object.keys(props.answers).map(
    key =>
      <FormControlLabel
        value={props.answers[key].text}
        control={<Radio required={true} onChange={props.handler}/>}
        label={props.answers[key].text}
      />
    );

  return (
    <div>
      <FormControl>
        <FormLabel>{props.question}</FormLabel>
        <RadioGroup name={props.id}>
          {options}
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RadioQuestion;
