import React from 'react';
import {render, screen} from '@testing-library/react';
import FullOffersListContianer from './full-offers-list-container';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

it(`FullOffersListContianer should render correcty`, () => {
  const history = createMemoryHistory();

  render(
      <Router history={history}>
        <FullOffersListContianer />
      </Router>
  )

  expect(screen.getByTestId(`full-offers-list-contianer`)).toBeInTheDocument();
})
