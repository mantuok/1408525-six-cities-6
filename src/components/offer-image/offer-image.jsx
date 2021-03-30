import React from 'react';
import {
  imagePropTypes,
  titlePropTypes
} from '../../utils/props-validation';

const OfferImage = (props) => {
  const {image, title} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={title} />
    </div>
  );
};

OfferImage.propTypes = {
  image: imagePropTypes,
  title: titlePropTypes
};

export default OfferImage;
