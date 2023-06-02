import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import {
  getNotices,
  getNoticesByQuery,
  getNoticeById,
  getMyAdsNotices,
  getFavoriteNotices,
  getFavoriteNoticesByQuery,
  getMyAdsNoticesByQuery,
  addNotice,
  updateNotice,
  removeNotice,
  addFavoriteNotice,
  removeFavoriteNotice,
} from './operations';
import { ageDeterminationFunc } from 'helpers/ageDeterminationFunc';

const initialState = {
  items: [],

  currentNotice: null,
  newNotice: {},
  isLoading: false,
  error: null,
  
  category: {
    inGoodHands: 'in good hands',
    sell: 'sell',
    lostFound: 'lost/found'
  }
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticeById.fulfilled, (state, { payload }) => {
        state.currentNotice = payload.result;
      })
      .addCase(addNotice.fulfilled, (state, { payload }) => {
        state.newNotice = payload;
      })
      .addCase(removeNotice.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item._id !== payload.id);
      })
      .addMatcher(
        isAnyOf(
          getNotices.fulfilled,
          getNoticesByQuery.fulfilled,
          getFavoriteNoticesByQuery.fulfilled,
          getMyAdsNoticesByQuery.fulfilled,
          getMyAdsNotices.fulfilled,

          getFavoriteNotices.fulfilled
        ),
        (state, { payload }) => {
          state.items = payload.map(notice => {
            if (notice.birthday) {
              notice.age = ageDeterminationFunc(notice.birthday);
            }
            return notice;
          });
        }
      )
      .addMatcher(
        isAnyOf(
          updateNotice.fulfilled,
          addFavoriteNotice.fulfilled,
          removeFavoriteNotice.fulfilled
        ),
        (state, { payload }) => {
          state.items = state.items.map(item => {
            if (item._id === payload._id) {
              item.favorites = payload.favorites;
            }
            return item;
          });
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.pending,
          getNoticesByQuery.pending,
          getFavoriteNoticesByQuery.pending,
          getMyAdsNoticesByQuery.pending,
          getNoticeById.pending,
          getMyAdsNotices.pending,
          getFavoriteNotices.pending,
          addNotice.pending,
          updateNotice.pending,
          removeNotice.pending,
          addFavoriteNotice.pending,
          removeFavoriteNotice.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.fulfilled,
          getNoticesByQuery.fulfilled,
          getFavoriteNoticesByQuery.fulfilled,
          getMyAdsNoticesByQuery.fulfilled,
          getNoticeById.fulfilled,
          getMyAdsNotices.fulfilled,
          getFavoriteNotices.fulfilled,
          addNotice.fulfilled,
          updateNotice.fulfilled,
          removeNotice.fulfilled,
          addFavoriteNotice.fulfilled,
          removeFavoriteNotice.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getNotices.rejected,
          getNoticesByQuery.rejected,
          getFavoriteNoticesByQuery.rejected,
          getMyAdsNoticesByQuery.rejected,
          getNoticeById.rejected,
          getMyAdsNotices.rejected,
          getFavoriteNotices.rejected,
          addNotice.rejected,
          updateNotice.rejected,
          removeNotice.rejected,
          addFavoriteNotice.rejected,
          removeFavoriteNotice.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const noticesReducer = noticesSlice.reducer;
