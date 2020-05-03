import React from 'react';
import '../index.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className="App-header">
            <nav className="App-navi">
                <div className="App-navi-item"><Link  to='/'>Главная</Link></div>
                <div className="App-navi-item"><Link to='/fill_survey'>Опрос</Link></div>
            </nav>
            <div className="App-name"> Дневник пациента </div>
        </header>
    );
}

export default Header;