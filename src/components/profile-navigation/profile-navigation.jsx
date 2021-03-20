import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../store/api-actions';
import {AuthorizationStatus} from '../../const';
import {
  functionPropTypes,
  stringPropTypesNotRequired,
  stringPropTypes
} from '../../utils/props-validation';
import { getAuthorizationStatus, getUserEmail, getUserAvatar } from '../../store/user/selectors';

const ProfileNavigation = (props) => {
  const {userEmail, userAvatar, authorizationStatus, onLogoutClick} = props;

  const handleLogoutClick = (evt) => {
    evt.preventDefault();
    onLogoutClick();
  };

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
  }
  return (
    <Link className="header__nav-link header__nav-link--profile" to="/login">
      <div className="header__avatar-wrapper user__avatar-wrapper">
      </div>
      <span className="header__login">Sign in</span>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  userEmail: getUserEmail(state),
  userAvatar: getUserAvatar(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLogoutClick() {
    dispatch(logout());
  }
});

ProfileNavigation.propTypes = {
  onLogoutClick: functionPropTypes,
  authorizationStatus: stringPropTypes,
  userEmail: stringPropTypesNotRequired,
  userAvatar: stringPropTypesNotRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ProfileNavigation));
