import React from 'react';
import {render, screen} from '@testing-library/react';
import ProfileNavigation from './profile-navigation';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {AuthorizationStatus} from '../../const';

describe(`ProfileNavigation should render correcty`, () => {
  const history = createMemoryHistory();

  it(`ProfileNavigation should render correcty if authorized`, () => {
    const mockStore = configureStore()({
      USER:
      {
        authorizationStatus: AuthorizationStatus.AUTH
      }
    });

    render(
        <redux.Provider store={mockStore}>
          <Router history={history}>
            <ProfileNavigation />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Log out`)).toBeInTheDocument();
  });

  it(`ProfileNavigation should render correcty if not authorized`, () => {
    const mockStore = configureStore()({
      USER:
      {
        authorizationStatus: AuthorizationStatus.NO_AUTH
      }
    });

    render(
        <redux.Provider store={mockStore}>
          <Router history={history}>
            <ProfileNavigation />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Sign in`)).toBeInTheDocument();
  });

});
