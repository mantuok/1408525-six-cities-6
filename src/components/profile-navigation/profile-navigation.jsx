import React, {useEffect} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {logout, checkAuth} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';

const ProfileNavigation = (props) => {
  const {userEmail, userAvatar, authorizationStatus, onLogoutClick, onCheckAuthorization} = props;

  useEffect(() => {
    onCheckAuthorization()
  }, [authorizationStatus]);

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    onLogoutClick()
  }

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return (
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="/favorites">
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img src={userAvatar} style={{borderRadius: `50%`}} />
        </div>
        <span className="header__user-name user__name">{userEmail}</span>
        </Link>
        <br />
        <a className="header__nav-link header__nav-link--logout" href="#" onClick={handleLogoutClick}>
          <span className="header__logout">Log out</span>
        </a>
      </li>
    );
  } else {
    return (
      <Link className="header__nav-link header__nav-link--profile" to="/login">
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__login">Sign in</span>
      </Link>
    )
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
  userAvatar: state.userAvatar
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout())
  },
  onCheckAuthorization() {
    dispatch(checkAuth())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNavigation)

