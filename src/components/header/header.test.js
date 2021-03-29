import React from 'react';
import {render, screen} from '@testing-library/react';
import Header from './header';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {
  AuthorizationStatus
} from '../../const';

it(`Header should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({
    USER:
    {
      authorizationStatus: AuthorizationStatus.AUTH
    }
  });

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <Header />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByAltText(`6 cities logo`)).toBeInTheDocument();
});
