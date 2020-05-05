import React, {useEffect} from 'react';
import '../index.scss'
import {Link} from "react-router-dom";
import logo from "../Resources/Images/logo.png"
import Button from "@material-ui/core/Button";
import Data from "../DataClasses/Data.js";
import { useLocation } from 'react-router-dom'


function Header() {
  const [isNavVisible, setIsNavVisible] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
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
  let location = useLocation();
  return (
    <header className="App-header">
      <div className='header_logo'>
        <img src={logo} alt="Логотип"/>
        <div className="App-name">Дневник пациента</div>
      </div>
      {(!isSmallScreen || isNavVisible) && (
        <nav>
          <div className={"App-navi" + getBlockVisibilityClasses(location)}>
            <Link className={getLinkClassesName(location, '/profile')} to='/profile'>Профиль</Link>
            <Link className={getLinkClassesName(location, '/daily_plan')} to='/daily_plan'>Дневной план </Link>
            <Link className={getLinkClassesName(location, '/recommendations')} to='/recommendations'>Рекомендации</Link>
            <Link className={getLinkClassesName(location, '/calendar')} to='/calendar'>Календарь</Link>
          </div>
          <div className='header_login'>
            <div className={"App-header-right-part" + getBlockVisibilityClasses(location)}>
              <a> Добрый день, {user.firstName} {user.lastName} </a>
            </div>
            <div className={"App-header-exit-button" + getBlockVisibilityClasses(location)}>
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
function getLinkClassesName(location, path) {
    if (path === location.pathname)
        return "App-navi-item App-navi-item-underlined";
    else
        return "App-navi-item";
}

function getBlockVisibilityClasses(location) {
    if (location.pathname === "/")
        return " App-navi-hided";
    else
        return "";
}


export default Header;