import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {SortingType} from '../../const';
import {
  stringPropTypes,
  functionPropTypes
} from '../../utils/props-validation';
import { getSelectedSortingType } from '../../store/data-set/selectors';

const SortingMenu = (props) => {
  const {selectedSortingType, onSortingSelect} = props;
  const [menuStateOpened, toggleMenuState] = useState(false);

  const sortingMenuListClass = classnames(
      `places__options`,
      `places__options--custom`,
      {"places__options--closed": !menuStateOpened},
      {"places__options--opened": menuStateOpened},
  );

  const getSortingMenuItemClass = (sortingItemType) => {
    return (
      classnames(
          `places__option`,
          {"places__option--active": (selectedSortingType === sortingItemType)}
      )
    );
  };

  const getSortingMenuItems = () => {
    return Object.keys(SortingType).map((type) => {
      return (
        <li
          key={type}
          className={getSortingMenuItemClass(SortingType[type])}
          tabIndex="0">
          {SortingType[type]}
        </li>
      );
    });
  };

  const handleMenuStateChange = () => {
    toggleMenuState((currentMenuStateOpened) => !currentMenuStateOpened);
  };

  const handleSortingMenuClick = (evt) => {
    evt.preventDefault();
    onSortingSelect(evt.target.textContent);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleMenuStateChange}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {selectedSortingType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={sortingMenuListClass}
        onClick={handleSortingMenuClick}
      >
        {getSortingMenuItems()}
      </ul>
    </form>
  );
};

const mapStateToProps = (state) => ({
  selectedSortingType: getSelectedSortingType(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSortingSelect(sortingType) {
    dispatch(ActionCreator.setSorting(sortingType));
  }
});

SortingMenu.propTypes = {
  onSortingSelect: functionPropTypes,
  selectedSortingType: stringPropTypes
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingMenu);
