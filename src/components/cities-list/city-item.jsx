import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {
  stringPropTypes,
  functionPropTypes,
  objectPropTypes
} from '../../utils/props-validation';
import {ActionCreator} from '../../store/action';
import { getActiveCity } from '../../store/data-set/selectors';

const CityItem = (props) => {
  const {city, activeCity, onCityClick} = props;

  const cityClickHandler = (evt) => {
    evt.preventDefault();
    onCityClick(evt.target.textContent);
  };

  const getCityClass = (cityName) =>
    classnames(`locations__item-link tabs__item`, {"tabs__item--active": cityName === activeCity});

  return (
    <li className="locations__item">
      <a className={getCityClass(city.NAME)} href="#" onClick={cityClickHandler}>
        <span>{city.NAME}</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.setCity(selectedCity));
  },
});

CityItem.propTypes = {
  activeCity: stringPropTypes,
  onCityClick: functionPropTypes,
  city: objectPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
