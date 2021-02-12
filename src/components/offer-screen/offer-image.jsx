import React from 'react';

const OfferImage = (props) => {
  const {image, title} = props;

  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt={title} />
    </div>
  )
};

export default OfferImage;
