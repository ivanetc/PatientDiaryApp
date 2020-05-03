import React from "react";
import Slider from "@material-ui/core/Slider";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const SliderQuestion = props => {
  const marks = Object.keys(props.answers).map(
    (key, i) => ({ label: props.answers[key].text, value: i})
  );
  return (
    <div>
      <FormControl>
        <FormLabel>
          {props.question}
        </FormLabel>
        <Slider
          defaultValue={10}
          step={1}
          marks={marks}
          max={(marks.length - 1)}
        />
      </FormControl>
    </div>
  );
}

export default SliderQuestion;