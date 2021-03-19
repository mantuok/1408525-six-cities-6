import React from 'react';
import {Link} from 'react-router-dom';
import ProfileNavigation from '../profile-navigation/profile-navigation';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <ProfileNavigation />
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default React.memo(Header);
