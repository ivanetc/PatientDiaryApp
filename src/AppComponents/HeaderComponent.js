import React from 'react';
import '../index.scss'
import {Link} from "react-router-dom";
import logo from "../Resources/Images/logo.png"
import Button from "@material-ui/core/Button";
import Data from "../DataClasses/Data.js";


function Header() {
    let user = Data.Data.getUserProfile(0);
    return (
        <header className="App-header">
            <img src={logo} alt="Логотип"/>
            <div className="App-name"> Дневник пациента </div>
            <div className="App-navi">
                <Link className="App-navi-item" to='/profile'>Профиль </Link>
                <Link className="App-navi-item" to='/daily_plan'>Дневной план </Link>
                <Link className="App-navi-item" to='/recommendations'>Рекомендации</Link>
                <Link className="App-navi-item" to='/calendar'>Календарь</Link>
                <Link className="App-navi-item" to='/fill_survey'>Сообщения</Link>
                <Link className="App-navi-item" to='/fill_survey'>Справка</Link>
            </div>
            <div className="App-header-right-part">
                <a> Добрый день, {user.firstName} {user.lastName} </a>
            </div>
            <div className="App-header-exit-button">
              <Link to='/'>
                <Button size="small" variant="contained" color="secondary">
                    Выход
                </Button>
              </Link>
            </div>
        </header>
    );
}

export default Header;