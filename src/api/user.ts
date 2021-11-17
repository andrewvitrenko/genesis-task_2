import { AppDispatch } from '../store';
import { storeUserInfo, addError, deleteError, storeUserFeed } from '../store/reducer';
import { ajax } from './ajax';

export const getUserInfo = () => (dispatch: AppDispatch): void => {
  ajax('https://tiktok33.p.rapidapi.com/user/info/dave.xp')
    .catch(() => dispatch(addError('Check your Internet and reload the page')))
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        dispatch(addError(data.message));
      } else {
        dispatch(storeUserInfo(data));
        dispatch(deleteError());
      }});
};

export const getUserFeed = () => (dispatch: AppDispatch): void => {
  ajax('https://tiktok33.p.rapidapi.com/user/feed/dave.xp')
    .catch(() => dispatch(addError('Check your Internet and reload the page')))
    .then(res => res.json())
    .then(data => {
      if (data.message) {
        dispatch(addError(data.message));
      } else {
        dispatch(storeUserFeed(data));
        dispatch(deleteError());
      }
    });
};
