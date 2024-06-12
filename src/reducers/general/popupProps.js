import {createSlice} from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setPopupProps'] = (state, action) => action.payload;
reducerObject['clearPopupProps'] = (state, action) => {
  return {};
};

const slice = createSlice({
  name: 'popupProps',
  initialState: {},
  reducers: reducerObject,
});

export const {setPopupProps, clearPopupProps} = slice.actions;
export default slice.reducer;
