import React from 'react';
import {goodPropTypes} from '../../utils/props-validation';

const OfferGood = (props) => {
  const {good} = props;

  return (
    <li className="property__inside-item">
      {good}
    </li>
  );
};

OfferGood.propTypes = {
  good: goodPropTypes
};

export default OfferGood;
