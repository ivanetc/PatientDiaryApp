import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxQuestion = props => {
  const options = props.answers.map(ans => <FormControlLabel control={<Checkbox/>} label={ans}/>);

  return (
    <FormControl>
      <FormLabel>{props.question}</FormLabel>
      <FormGroup name='checkbox'>
        {options}
      </FormGroup>
    </FormControl>
  );
}

export default CheckboxQuestion;