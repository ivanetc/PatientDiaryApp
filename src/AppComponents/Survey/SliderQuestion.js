import React from "react";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const SliderQuestion = props => {
  // const marks = '';

  return (
    <div>
      <Typography>
        {props.question}
      </Typography>
      <Slider
        defaultValue={10}
        // marks={marks}
      />
    </div>
  );
}

export default SliderQuestion;