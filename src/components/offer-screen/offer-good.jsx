import React from 'react';

const OfferGood = (props) => {
  const {good} = props;

  return (
    <li className="property__inside-item">
    {good}
    </li>
  )
}

export default OfferGood;
