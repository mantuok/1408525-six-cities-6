import React from 'react';
import {render} from '@testing-library/react';
import LoadingPlaceholder from './loading-placeholder';

it(`LoadingPlaceholder should render correcty`, () => {
  const {getByText} = render(<LoadingPlaceholder />);
  const textElement = getByText(`Loading...`);
  expect(textElement).toBeInTheDocument();
});
