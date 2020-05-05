import React from "react";
import Header from "./HeaderComponent";
import Data from "../DataClasses/Data";
import TextField from '@material-ui/core/TextField';
import '../index.scss'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {classes} from "istanbul-lib-coverage";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {keys} from "@material-ui/core/styles/createBreakpoints";
import Paper from "@material-ui/core/Paper";

const ProfilAll = ({userId, firstName, lastName, email, careId, careList}) => {

  const handleChange = (event) => {
    Data.Data.setCare(userId, event.target.value);
  };

  let MenuItems = Object.keys(careList).map(key =>
    <MenuItem value={key}>
      <em>{careList[key].name}</em>
    </MenuItem>
  )

  return (
    <ul className="profile_contents" className="all_field">
      <li className="profile_firstname" className="profile_local_content" className="field">
        <label className="profile_local_name">Имя:</label>
        <TextField className="profile_local_content_field" disabled id="standard-disabled" label=""
                   defaultValue={firstName}/>
      </li>
      <li className="profile_lasttname" className="profile_local_content" className="field">
        <label className="profile_local_name">Фамилия:</label>
        <TextField disabled id="standard-disabled" label="" defaultValue={lastName}/>
      </li>
      <li className="profile_email" className="profile_local_content" className="field">
        <label className="profile_local_name">E-mail:</label>
        <TextField disabled id="standard-disabled" label="" defaultValue={email}/>
      </li>
      <li className="profile_care" className="profile_local_content" className="field">
        <label className="profile_local_name"></label>
        <FormControl variant="outlined">
          <InputLabel id="demo-simple-select-outlined-label" className="inputlabel-profile">ВИД УХОДА</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            defaultValue={careId}
            // value={careId}
            onChange={handleChange}
            label="diagnosis">
            {MenuItems}
          </Select>
        </FormControl>
      </li>
    </ul>
  );
}

function ProfilPageComponent() {
    let userId=0;
  let user = Data.Data.getUserProfile(userId);//надопонять откуда берётся юзер айди и как
  let careList = Data.Data.getCareList();
  let html =
    <div>
      <Paper className="all_profile_content">
        <div className="profile_header">Профиль</div>
        <ProfilAll
            userId={userId}
          firstName={user.firstName}
          lastName={user.lastName}
          careId={user.careId}
          email={user.email}
          careList={careList}
        />
      </Paper>
    </div>;
  return html;
}

export default ProfilPageComponent;