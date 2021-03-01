import React from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import {
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';
import {ActionCreator} from '../../store/action';

const CityItem = (props) => {
  const {city, activeCity, onCityClick} = props;

  const cityClickHandler = (evt) => {
    evt.preventDefault();
    onCityClick(evt.target.textContent);
  };

  const getCityClass = (cityName, activeCity) =>
      classnames(`locations__item-link tabs__item`, {"tabs__item--active": cityName === activeCity});

  return (
    <li className="locations__item">
      <a className={getCityClass(city.NAME, activeCity)} href="#" onClick={cityClickHandler}>
        <span>{city.NAME}</span>
      </a>
    </li>
  );
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.setCity(selectedCity));
  },
});

CityItem.propTypes = {
  activeCity: stringPropTypes,
  onCityClick: functionPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(CityItem);
