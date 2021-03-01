import PropTypes from 'prop-types';

export const offerPropTypes = PropTypes.shape({
  bedrooms: PropTypes.number.isRequired,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired
    }),
    name: PropTypes.string.isRequired
  }),
  description: PropTypes.string.isRequired,
  goods: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }),
  id: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(
      PropTypes.string.isRequired
  ),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  }),
  maxAdults: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
});

export const reviewPropTypes = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  })
});

export const offersPropTypes = PropTypes.arrayOf(offerPropTypes);
export const reviewsPropTypes = PropTypes.arrayOf(reviewPropTypes);

export const goodPropTypes = PropTypes.string.isRequired;
export const imagePropTypes = PropTypes.string.isRequired;
export const titlePropTypes = PropTypes.string.isRequired;
export const functionPropTypes = PropTypes.func.isRequired;
export const booleanPropTypes = PropTypes.bool.isRequired;
export const stringPropTypes = PropTypes.string.isRequired;
export const functionPropTypesNotRequired = PropTypes.func;
export const booleanPropTypesNotRequired = PropTypes.bool;
