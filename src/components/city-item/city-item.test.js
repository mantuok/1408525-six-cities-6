import React from 'react';
import {render, screen} from '@testing-library/react';
import CityItem from './city-item';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

it(`CityItem should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({
    DATA_SET: {
      activeCity: `Paris`
    }
  });

  const city = {
    NAME: `Amsterdam`
  };

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <CityItem city={city} />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(city.NAME)).toBeInTheDocument();
});
