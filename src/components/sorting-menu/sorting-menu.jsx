import React, {useState} from 'react';
import {connect} from 'react-redux';
import {nanoid} from 'nanoid';
import {ActionCreator} from '../../store/action';
import classnames from 'classnames';
import {SortingType} from '../../const';

const SortingMebu = (props) => {
  const {selectedSortingType, onSortingSelect} = props;
  const [menuStateOpened, toggleMenuState] = useState(false)

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
        {"places__option--active": (selectedSortingType === sortingItemType) }
      )
    )
  };

  const getSortingMenuItems = () => {
    return Object.keys(SortingType).map((type) => {
      return (
        <li
          key={nanoid()}
          className={getSortingMenuItemClass(SortingType[type])}
          tabIndex="0">
          {SortingType[type]}
        </li>
      )
    })
  }

  const handleSortingMenuClick = (evt) => {
    evt.preventDefault();
    onSortingSelect(evt.target.textContent)
  }

  return (
  <form
    className="places__sorting"
    action="#"
    method="get"
    onClick={() =>
      toggleMenuState(currentMenuStateOpened => !currentMenuStateOpened)}
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
  )
};

const mapStateToProps = (state) => ({
  selectedSortingType: state.selectedSortingType
});

const mapDispatchToProps = (dispatch) => ({
  onSortingSelect(sortingType) {
    dispatch(ActionCreator.setSorting(sortingType));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SortingMebu);
