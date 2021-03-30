import React from 'react';
import {render, screen} from '@testing-library/react';
import OfferReview from './offer-review';

it(`OfferImage should render correcty`, () => {
  const mockReview = {
    comment: `Curabitur mattis, ante vitae hendrerit lobortis, massa lorem feugiat ipsum, ut sagittis nibh nisi eleifend ligula. Praesent accumsan urna at elit euismod accumsan.`,
    date: `2020-05-08T14:13:56.569Z`,
    id: 2,
    rating: 3,
    user: {
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/1.jpg`,
      id: 5,
      isPro: false,
      name: `Ben`
    }
  };

  render(
      <OfferReview review={mockReview} />
  );

  expect(screen.getByText(`Curabitur mattis, ante vitae hendrerit lobortis, massa lorem feugiat ipsum, ut sagittis nibh nisi eleifend ligula. Praesent accumsan urna at elit euismod accumsan.`)).toBeInTheDocument();
});
