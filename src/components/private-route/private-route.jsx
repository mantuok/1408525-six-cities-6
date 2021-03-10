import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

export default connect(mapStateToProps, null)(PrivateRoute);
