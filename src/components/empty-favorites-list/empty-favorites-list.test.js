import React from 'react';
import {render, screen} from '@testing-library/react';
import EmptyFavoriteScreen from './empty-favorites-list';

it(`EmptyFavoriteScreen should render correcty`, () => {
  render(
      <EmptyFavoriteScreen />
  )

  expect(screen.getByText(`Nothing yet saved.`)).toBeInTheDocument();
  expect(screen.getByText(`Save properties to narrow down search or plan your future trips.`)).toBeInTheDocument();
})
