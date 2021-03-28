import React from 'react';
import {render} from '@testing-library/react';
import PageNotFoundScreen from './page-not-found-screen';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';

const mockStore = configureStore({});

it(`PageNotFoundScreen should render correcty`, () => {
  const history = createMemoryHistory();

  const {getByText} = render(
    <redux.Provider store={mockStore({})}>
      <Router history={history}>
        <PageNotFoundScreen />
      </Router>
    </redux.Provider>
  )

  const textElement = getByText(`Unfortunately page not found`);
  expect(textElement).toBeInTheDocument();
})
