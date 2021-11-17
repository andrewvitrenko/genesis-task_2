import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, Store, User, IVideo } from '../interfaces';

const initialState: Store = {
  feed: [],
  user: {
    user: {
      id: '',
      shortId: '',
      uniqueId: '',
      nickname: '',
      avatarLarger: '',
      avatarMedium: '',
      avatarThumb: '',
      signature: '',
      createTime: 0,
      verified: false,
      secUid: '',
      ftc: false,
      relation: 0,
      openFavorite: false,
      bioLink: {
        link: 0,
        risk: 0,
      },
      commentSetting: 0,
      duetSetting: 0,
      stitchSetting: 0,
      privateAccount: false,
      secret: false,
      isADVirtual: false,
      roomId: '',
    },
    stats: {
      followerCount: 0,
      followingCount: 0,
      heart: 0,
      heartCount: 0,
      videoCount: 0,
      diggCount: 0,
    },
    itemList: [],
  },
  userFeed: [],
  error: ''
};

const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    storeFeed(store, action: PayloadAction<IPost[]>) {
      store.feed = action.payload;
    },
    storeUserInfo(store, action: PayloadAction<User>) {
      store.user = action.payload;
    },
    addError(store, action: PayloadAction<string>) {
      store.error = action.payload;
    },
    deleteError(store) {
      store.error = '';
    },
    storeUserFeed(store, action: PayloadAction<IVideo[]>) {
      store.userFeed = action.payload;
    }
  }
});

export const { storeFeed, storeUserInfo, addError, deleteError, storeUserFeed } = appReducer.actions;
export default appReducer.reducer;
