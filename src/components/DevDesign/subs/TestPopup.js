import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {setPopupType} from 'Reducers/general/popupType';

import {localStyles} from '../localStyles';

const TestPopup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        btnText="Show Popup"
        onPress={() => dispatch(setPopupType('data_submitted_successfully'))}
      />
    </>
  );
};

export default TestPopup;
