import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../const';
import {
  stringPropTypes,
  functionPropTypes,
  booleanPropTypes
} from '../../utils/props-validation';

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;
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
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
});

PrivateRoute.propTypes = {
  authorizationStatus: stringPropTypes,
  render: functionPropTypes,
  path: stringPropTypes,
  exact: booleanPropTypes,
};

export default connect(mapStateToProps, null)(PrivateRoute);
