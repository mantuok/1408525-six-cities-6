import React from 'react';
import {render, screen} from '@testing-library/react';
import CitiesList from './cities-list';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

it(`CitiesList should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({
    DATA_SET: {
      activeCity: `Paris`
    }
  });

  render(
    <redux.Provider store={mockStore}>
      <Router history={history}>
        <CitiesList />
      </Router>
    </redux.Provider>
  )

  expect(screen.getByText(`Paris`)).toBeInTheDocument();
})
