import React from "react";
import Header from "./HeaderComponent";
/*import Data from "./../DataClasses/DataClass";*/
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import '../index.scss'

//Data.init();

const ProfilAll = ({firstName, lastName, email, care}) => {
        return (
                <div className="profile_contents">
                        <div className="profile_firstname" className="profile_local_content">
                            <TextField className="profile_local_content_field" disabled id="standard-disabled" label="" defaultValue={firstName} />
                            <Divider className="profile_local_line"/>
                        </div>
                        <div className="profile_lasttname" className="profile_local_content">
                            <TextField disabled id="standard-disabled" label="" defaultValue={lastName} />
                            <Divider className="profile_local_line"/>
                        </div>
                        <div className="profile_email" className="profile_local_content">
                            <TextField disabled id="standard-disabled" label="" defaultValue={email} />
                            <Divider className="profile_local_line"/>
                        </div>
                        <div className="profile_care" className="profile_local_content">
                            <TextField disabled id="standard-disabled" label="" defaultValue={care} />
                            <Divider className="profile_local_line"/>
                        </div>
                </div>
        );
}

function ProfilPageComponent() {
        let html =
        <div>
                <Header/>
                <div className="all_profile_content">
                        <div className="profile_header">Профиль</div>
                        <Divider className="profile_header_line" />
                        <ProfilAll firstName='Иван' lastName='Иванов' care='1' email='ivanov@mail.ru'/>
                </div>
        </div>;
        return html;
}
export default ProfilPageComponent;