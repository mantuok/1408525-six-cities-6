import React from 'react';
import {render, screen} from '@testing-library/react';
import PageNotFoundScreen from './page-not-found-screen';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {
  AuthorizationStatus
} from '../../const';

it(`PageNotFoundScreen should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({
    USER:
    {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      userEmail: `johndoe@gmail.com`,
      userAvatar: `img/pic-1.jpg`
    }
  });

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <PageNotFoundScreen />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Unfortunately page not found`)).toBeInTheDocument();
});
