import React from 'react';
import {render, screen} from '@testing-library/react';
import OfferGood from './offer-good';

it(`OfferGood should render correcty`, () => {
  const mockGood = `dishwasher`

  render(
      <OfferGood good={mockGood} />
  )

  expect(screen.getByText(`dishwasher`)).toBeInTheDocument();
})
