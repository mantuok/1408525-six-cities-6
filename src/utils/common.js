import {RATING_STARS} from '../const'

export const getRatingStarsWidth = (rating) => RATING_STARS[Math.round(rating)];
