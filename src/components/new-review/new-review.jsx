import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {postReview} from '../../store/api-actions';
import {functionPropTypes} from '../../utils/props-validation';

const NewReview = (props) => {
  const {onReivewPost} = props;
  const {id} = useParams();
  const [reviewForm, setReviewForm] = useState({
    comment: ``,
    rating: 0
  });

  const getButtonDisabledBoolean = () => {
    if (reviewForm.rating === 0 || reviewForm.comment.length === 0) {
      return true;
    }
    return false;
  };

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setReviewForm({
      ...reviewForm,
      [name]: value
    });
  };

  const submitReviewHandler = (evt) => {
    evt.preventDefault();
    onReivewPost(id, reviewForm);

    setReviewForm({
      ...reviewForm,
      comment: ``,
      rating: 0
    });

    evt.target.reset();
  };

  return (
    <form
      className="reviews__form form"
      action=""
      onSubmit={submitReviewHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" onChange={handleFieldChange}>
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        onChange={handleFieldChange}
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={getButtonDisabledBoolean()}>
          Submit
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onReivewPost(id, reviewData) {
    dispatch(postReview(id, reviewData));
  }
});

NewReview.propTypes = {
  onReivewPost: functionPropTypes
};

export default connect(null, mapDispatchToProps)(NewReview);
