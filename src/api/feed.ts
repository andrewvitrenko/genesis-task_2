import { AppDispatch } from '../store';
import { storeFeed } from '../store/reducer';
import { ajax } from './ajax';

export const getFeed = () => (dispatch: AppDispatch): void => {
  ajax('https://tiktok33.p.rapidapi.com/trending/feed')
    .then(res => res.json())
    .then(data => dispatch(storeFeed(data)));
};
