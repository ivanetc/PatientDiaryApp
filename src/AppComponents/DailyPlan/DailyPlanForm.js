import React from "react";
import CheckboxQuestion from "../Survey/CheckboxQuestion";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Data from "../../DataClasses/Data";


class DailyPlanForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    Data.Data.checkPoint(this.props.userId, event.target.name);
  }

  render() {
    const plan = this.props.plan;
    const checkboxes = Object.keys(plan).map(
      key => <FormControlLabel
        control={<Checkbox name={key} onChange={this.handleChange} value={plan[key].text}/>}
        label={plan[key].text}
      />
    );

    return (
      <div className='all_daily_plan'>
        {checkboxes}
      </div>
    );
  }
}

export default DailyPlanForm;