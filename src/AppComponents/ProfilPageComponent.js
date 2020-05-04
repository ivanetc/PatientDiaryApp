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

const ProfilAll = ({firstName, lastName, email, careId, careList}) => {
    const [nameCare, setCare] = React.useState('');

    const handleChange = (event) => {
        setCare(event.target.value);
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
                            <TextField className="profile_local_content_field" disabled id="standard-disabled" label="" defaultValue={firstName} />
                        </li>
                        <li className="profile_lasttname" className="profile_local_content" className="field">
                            <label className="profile_local_name">Фамилия:</label>
                            <TextField disabled id="standard-disabled" label="" defaultValue={lastName} />
                        </li>
                        <li className="profile_email" className="profile_local_content" className="field">
                            <label className="profile_local_name">E-mail:</label>
                            <TextField disabled id="standard-disabled" label="" defaultValue={email} />
                        </li>
                        <li className="profile_care" className="profile_local_content" className="field">
                            <label className="profile_local_name"></label>
                            <FormControl variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label" className="inputlabel-profile">ВИД УХОДА</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={careId}
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
        let user = Data.Data.getUserProfile(0);
        let careList = Data.Data.getCareList();
        let html =
        <div>
                <Header/>
                <div className="all_profile_content">
                        <div className="profile_header">Профиль</div>
                        <ProfilAll
                            firstName={user.firstName}
                            lastName={user.lastName}
                            care={user.careId}
                            email={user.login}
                            careList={careList}
                        />
                </div>
        </div>;
        return html;
}
export default ProfilPageComponent;