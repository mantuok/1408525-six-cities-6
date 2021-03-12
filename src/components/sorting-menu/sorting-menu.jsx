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

  const getSortingMenuItemClass = (itemType) => {
    return (
      classnames(
        `places__option`,
        {"places__option--active": selectedSortingType === itemType }
      )
    )
   }

  const getSortingMenuItems = () => {
    return Object.keys(SortingType).map((type) => {
      return (
        <li
          key={nanoid()}
          className={getSortingMenuItemClass(type)}
          tabIndex="0">
          {SortingType.type}
        </li>
      )
    })
  }

  const handleSortingMenuClick = (evt) => {
    evt.preventDefault();
    console.log(evt.target.textContent)
    onSortingSelect(SortingType.TOPRATED)
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
      {/* <li className="places__option places__option--active" tabIndex="0">Popular</li>
      <li className="places__option" tabIndex="0">Price: low to high</li>
      <li className="places__option" tabIndex="0">Price: high to low</li>
      <li className="places__option" tabIndex="0">Top rated first</li> */}
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
