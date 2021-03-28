import React from 'react';
import {render, screen} from '@testing-library/react';
import FullOffersListContianer from './full-offers-list-container';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

it(`FullOffersListContianer should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({});

  render(
    <redux.Provider store={mockStore}>
      <Router history={history}>
        <FullOffersListContianer />
      </Router>
    </redux.Provider>
  )

  expect(screen.getByTestId(`full-offers-list-contianer`)).toBeInTheDocument();
})
