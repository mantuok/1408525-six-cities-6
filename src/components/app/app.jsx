import React from 'react';
import {Router as BrowserRouter, Switch, Route} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route'
import MainScreen from '../main-screen/main-screen';
import OfferScreen from '../offer-screen/offer-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import browserHistory from '../../browser-history'
import {
  offersPropTypes,
  reviewsPropTypes
} from '../../utils/props-validation';

const App = (props) => {
  const {reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route
          exact
          path="/login"
          render={({history}) => {
            return (
              <SignInScreen
                onLoginSuccess={() => history.push(`/`)}
              />
            );
          }}
        />
        <PrivateRoute
          exact
          path="/favorites"
          render={() => <FavoritesScreen />}
        >
        </PrivateRoute>
        <Route exact path="/offer/:id">
          <OfferScreen reviews={reviews} />
        </Route>
        <Route>
          <PageNotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: offersPropTypes,
  reviews: reviewsPropTypes
};

export default App;
