import { AppDispatch } from '../store';
import { storeFeed } from '../store/reducer';

export const loadFeed = () => (dispatch: AppDispatch): void => {
  fetch('https://tiktok33.p.rapidapi.com/trending/feed', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
      'x-rapidapi-key': 'd526b701b2msh132c098786d6e2cp19e6cbjsn179a56f18800',
    }
  })
    .then(res => res.json())
    .catch(err => alert(err))
    .then(data => dispatch(storeFeed(data)));
};
