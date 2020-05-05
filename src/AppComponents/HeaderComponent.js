import React, {useEffect} from 'react';
import '../index.scss'
import {Link} from "react-router-dom";
import logo from "../Resources/Images/logo.png"
import Button from "@material-ui/core/Button";
import Data from "../DataClasses/Data.js";


function Header() {
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  let user = Data.Data.getUserProfile(0);
  return (
    <header className="App-header">
      <div className='header_logo'>
        <img src={logo} alt="Логотип"/>
        <div className="App-name">Дневник пациента</div>
      </div>
      {(!isSmallScreen || isNavVisible) && (
        <nav>
          <div className="App-navi">
            <Link className="App-navi-item" to='/profile'>Профиль</Link>
            <Link className="App-navi-item" to='/daily_plan'>Дневной план </Link>
            <Link className="App-navi-item" to='/recommendations'>Рекомендации</Link>
            <Link className="App-navi-item" to='/calendar'>Календарь</Link>
          </div>
          <div className='header_login'>
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
          </div>
        </nav>
        )}
      <div onClick={toggleNav} className='burger'/>
    </header>
  );
}

export default Header;