import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost, Store } from '../interfaces';

const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    feed: [],
  } as Store,
  reducers: {
    storeFeed(store, action: PayloadAction<IPost[]>) {
      store.feed = action.payload;
    }
  }
});

export const { storeFeed } = appReducer.actions;
export default appReducer.reducer;
