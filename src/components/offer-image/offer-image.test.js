import React from 'react';
import {render, screen} from '@testing-library/react';
import OfferImage from './offer-image';

it(`OfferImage should render correcty`, () => {
  const mockTitle =`Beautiful & luxurious studio at great location`;
  const mockImage = `img/pic-1.jpg`

  render(
      <OfferImage title={mockTitle} image={mockImage} />
  )

  expect(screen.getByAltText(`Beautiful & luxurious studio at great location`)).toBeInTheDocument();
})
