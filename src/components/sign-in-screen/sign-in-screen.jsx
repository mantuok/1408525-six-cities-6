import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import {login, logout} from '../../store/api-actions';

const SignInScreen = (props) => {
  const {onSubmit, onLogoutClick} = props;
  const emailRef = useRef();
  const passwordRef= useRef();
  const history = useHistory();

  const handleSubmit = (evt) => {
    console.log(`onSubmit ${evt}`)
    evt.preventDefault();

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
  }

  const handleLogoutClick = (evt) => {
    evt.preventDefault();

    onLogoutClick()
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--logout" href="#" onClick={handleLogoutClick}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__logout">Log out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label
                  className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  ref={passwordRef}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                // onClick={() => history.push(`/`)}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authorizationData) {
    console.log(`authorizationData ${authorizationData}`)
    dispatch(login(authorizationData))
  },
  onLogoutClick() {
    dispatch(logout())
  }
});

export default connect(null, mapDispatchToProps)(SignInScreen);
