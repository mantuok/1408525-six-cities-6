import {SortingType} from '../const';

export const applySorting = (offers, selectedSortingType) => {
  switch (selectedSortingType) {
    case SortingType.POPULAR:
      return offers;
    case SortingType.PRICE_HIGH_LOW:
      return offers
          .slice()
          .sort((a, b) => b.price - a.price);
    case SortingType.PRICE_LOW_HIGH:
      return offers
          .slice()
          .sort((a, b) => a.price - b.price);
    case SortingType.TOPRATED:
      return offers
          .slice()
          .sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }

}
