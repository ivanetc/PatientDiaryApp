import React from 'react';
import '../index.css'
import {Link} from "react-router-dom";
import logo from "../Resources/Images/logo.png"
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function Header() {
    return (
        <header className="App-header">
            <img src={logo} alt="Логотип"/>
            <div className="App-name"> Дневник пациента </div>
            <Tabs aria-label="simple tabs example">
                <Link className="App-navi-item" to='/'><Tab label="Профиль"  /></Link>
                <Link className="App-navi-item" to='/fill_survey'> <Tab label="Опрос"  /></Link>
            </Tabs>
        </header>
    );
}

export default Header;