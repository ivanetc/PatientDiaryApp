import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const CheckboxQuestion = props => {
  const options = Object.keys(props.answers).map(
    key => <FormControlLabel
      control={<Checkbox name={props.id} onChange={props.handler} value={key}/>}
      label={props.answers[key].text}
      // labelPlacement='bottom'
    />
    );

  return (
    <div>
      <FormControl>
        <FormLabel>{props.question}</FormLabel>
        <FormGroup name={props.id}>
          {options}
        </FormGroup>
      </FormControl>
    </div>
  );
}

export default CheckboxQuestion;