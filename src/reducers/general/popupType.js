import {createSlice} from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setPopupType'] = (state, action) => action.payload;
reducerObject['clearPopupType'] = (state, action) => '';

const slice = createSlice({
  name: 'popupType',
  initialState: '',
  reducers: reducerObject,
});

export const {setPopupType, clearPopupType} = slice.actions;
export default slice.reducer;
