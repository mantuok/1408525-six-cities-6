import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainScreen from '../main-screen/main-screen';
import OfferScreen from '../offer-screen/offer-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import SignInScreen from '../sign-in-screen/sign-in-screen';
import PageNotFoundScreen from '../page-not-found-screen/page-not-found-screen';
import {getOfferById} from '../../utils/common';
import {
  offersPropTypes,
  reviewsPropTypes
} from '../../utils/props-validation';

const App = (props) => {
  const {offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen offers={offers} />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen offers={offers} />
        </Route>
        <Route exact path="/offer/:id">
          {/* // render = {({match}) => { */}
          {/* //   const offerId = parseInt(match.params.id, 10);
          //   return <OfferScreen offer={getOfferById(offers, offerId)} reviews={reviews} />;
          // }} /> */}
          <OfferScreen offers={offers} reviews={reviews} />
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
