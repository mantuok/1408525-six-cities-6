import {nanoid} from "nanoid";

export const RATING_STARS = {
  0: 0,
  1: 20,
  2: 40,
  3: 60,
  4: 80,
  5: 100
};

export const City = {
  Paris: {
    ID: nanoid(),
    NAME: `Paris`,
    LATITUDE: 48.85661,
    LONGITUDE: 2.351499
  },
  Cologne: {
    ID: nanoid(),
    NAME: `Cologne`,
    LATITUDE: 50.938361,
    LONGITUDE: 6.959974
  },
  Brussels: {
    ID: nanoid(),
    NAME: `Brussels`,
    LATITUDE: 50.846557,
    LONGITUDE: 4.351697
  },
  Amsterdam: {
    ID: nanoid(),
    NAME: `Amsterdam`,
    LATITUDE: 52.37454,
    LONGITUDE: 4.897976
  },
  Hamburg: {
    ID: nanoid(),
    NAME: `Hamburg`,
    LATITUDE: 53.550341,
    LONGITUDE: 10.000654
  },
  Dusseldorf: {
    ID: nanoid(),
    NAME: `Dusseldorf`,
    LATITUDE: 51.225402,
    LONGITUDE: 6.776314
  }
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`
};

export const MapType = {
  MAIN: `MAIN`,
  NEARBY: `NEARBY`
};

export const MapHeigth = {
  MAIN: 500,
  NEARBY: 600
};

export const MapIconUrl = {
  ALL: `img/pin.svg`,
  ACTIVE: `img/pin-active.svg`
};

export const ZOOM = 12;

export const SortingType = {
  POPULAR: `Popular`,
  PRICE_LOW_HIGH: `Price: low to high`,
  PRICE_HIGH_LOW: `Price: high to low`,
  TOPRATED: `Top rated first`
}
