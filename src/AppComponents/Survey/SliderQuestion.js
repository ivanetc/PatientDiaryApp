import React from "react";
import Slider from "@material-ui/core/Slider";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const SliderQuestion = props => {
  // const marks = '';

  return (
    <div>
      <FormControl>
        <FormLabel>
          {props.question}
        </FormLabel>
        <Slider
          defaultValue={10}
          // marks={marks}
        />
      </FormControl>
    </div>
  );
}

export default SliderQuestion;