import React from 'react';
import {nanoid} from 'nanoid';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import classNames from 'classnames';
import {ActionCreator} from '../../store/action';
import {City} from '../../const';

const CitiesList = (props) => {
  const {activeCity, onCityClick} = props;

  const cityClickHandler = (evt) => {
    evt.preventDefault();
    onCityClick(evt.target.textContent);
  }

  const renderCityItems = () => {
    return Object.values(City).map((city) => (
        <li className="locations__item" key={nanoid()}>
          <a className={classNames(`locations__item-link tabs__item`, {"tabs__item--active": city === activeCity})} href="#" onClick={cityClickHandler}>
            <span>{city}</span>
          </a>
        </li>
    ))
  }

  return (
    <ul className="locations__list tabs__list">
      {renderCityItems()}
    </ul>
  )
}

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.setCity(selectedCity));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
