import React from 'react';
import {render, screen} from '@testing-library/react';
import EmptyOffersListContainer from './empty-offers-list-container';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

it(`EmptyOffersListContainer should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({
    DATA_SET: {
      activeCity: `Paris`
    }
  });

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <EmptyOffersListContainer />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`No places to stay available`)).toBeInTheDocument();
  expect(screen.getByText(`We could not find any property available at the moment in Paris`)).toBeInTheDocument();
});
