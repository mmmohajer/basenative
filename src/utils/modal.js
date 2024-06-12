import {clearModalType} from 'Reducers/general/modalType';
import {clearModalProps} from 'Reducers/general/modalProps';
import {clearPopupType} from 'Reducers/general/popupType';
import {clearPopupProps} from 'Reducers/general/popupProps';

export const clearModal = dispatch => {
  dispatch(clearModalType());
  dispatch(clearModalProps());
};

export const clearPopup = dispatch => {
  dispatch(clearPopupType());
  dispatch(clearPopupProps());
};
