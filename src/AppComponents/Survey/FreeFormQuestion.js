import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const FreeFormQuestion = props => {

  return (
    <div className="onefreeform">
      <TextField
        onChange={props.handler}
        required={true}
        type="textarea"
        name={props.id}
        className="inputfreeform"
        label={props.label}
      />
    </div>);
}

export default FreeFormQuestion;