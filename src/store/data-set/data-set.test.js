import {dataSet} from './data-set';
import {ActionType} from '../action';
import {
  SortingType,
  City
} from '../../const';

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(dataSet(undefined, {}))
      .toEqual({
        selectedSortingType: SortingType.POPULAR,
        offersPerCity: [],
        activeCity: City.Paris.NAME,
        activeCardId: null
      });
  });

  it(`Reducer should set correct city`, () => {
    const state = {activeCity: `Paris`};

    const setSelectedCity = {
      type: ActionType.SET_CITY,
      payload: City.Amsterdam.NAME
    };

    expect(dataSet(state, setSelectedCity))
      .toEqual({activeCity: City.Amsterdam.NAME});
  });

  it(`Reducer should set correct sorting type`, () => {
    const state = {selectedSortingType: SortingType.POPULAR};

    const setSortingType = {
      type: ActionType.SET_SORTING,
      payload: SortingType.TOPRATED
    };

    expect(dataSet(state, setSortingType))
      .toEqual({selectedSortingType: SortingType.TOPRATED});
  });

  it(`Reducer should set correct active card`, () => {
    const state = {activeCardId: null};

    const setActiveCard = {
      type: ActionType.SET_ACTIVE_CARD,
      payload: 1
    };

    expect(dataSet(state, setActiveCard))
      .toEqual({activeCardId: 1});
  });
});

