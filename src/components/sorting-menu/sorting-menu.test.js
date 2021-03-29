import React from 'react';
import {render, screen} from '@testing-library/react';
import SortingMenu from './sorting-menu';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {SortingType} from '../../const';

it(`SortingMenu should render correcty if authorized`, () => {
  const history = createMemoryHistory();
  const mockStore = configureStore()({
    DATA_SET:
    {
      selectedSortingType: SortingType.POPULAR
    }
  });

  render(
      <redux.Provider store={mockStore}>
        <Router history={history}>
          <SortingMenu />
        </Router>
      </redux.Provider>
  );

  expect(screen.getByText(`Sort by`)).toBeInTheDocument();
});
