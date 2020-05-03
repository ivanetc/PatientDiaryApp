import React from "react";
import Header from "./HeaderComponent";
import Data from "../DataClasses/Data";
import TextField from '@material-ui/core/TextField';
import '../index.scss'

//Data.init();

let user = Data.Data.getUserProfile(1);

const ProfilAll = ({firstName, lastName, email, care}) => {
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
                            <TextField disabled id="standard-disabled" label="" defaultValue={care} />
                        </li>
                </ul>
        );
}

function ProfilPageComponent() {
        let html =
        <div>
                <Header/>
                <div className="all_profile_content">
                        <div className="profile_header">Профиль</div>
                        <ProfilAll firstName={user.firstName} Иванов={user.lastName} care='1' email={user.login}/>
                </div>
        </div>;
        return html;
}
export default ProfilPageComponent;