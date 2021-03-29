import React from 'react';
import {render, screen} from '@testing-library/react';
import NewReview from './new-review';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

it(`NewReview should render correcty`, () => {
  const history = createMemoryHistory();

  const mockStore = configureStore()({});

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <NewReview />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Your review`)).toBeInTheDocument();
  expect(screen.getByText(`Submit`)).toBeInTheDocument();
});
