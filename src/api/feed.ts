import { AppDispatch } from '../store';
import { storeFeed, addError, deleteError } from '../store/reducer';
import { ajax } from './ajax';

export const getFeed = () => (dispatch: AppDispatch): void => {
  ajax('https://tiktok33.p.rapidapi.com/trending/feed')
    .catch(() => dispatch(addError('Check your Internet and reload the page')))
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        dispatch(addError(data.message));
      } else {
        dispatch(storeFeed(data));
        dispatch(deleteError());
      }});
};
