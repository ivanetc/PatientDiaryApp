import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';




const FreeFormQuestion = ({label, name}) => {

    return (
        <div className="onefreeform">
                <TextField
                    type="textarea"
                    name={name}
                    className="inputfreeform"
                    label={label}
                />
        </div>);
}

export default FreeFormQuestion;