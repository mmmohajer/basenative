import {useState} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {setModalType} from 'Reducers/general/modalType';
import {MODAL_TYPES} from 'Constants/DevDesignVars';

import {localStyles} from '../localStyles';

const TestModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        btnText={`Show Modal of type ${MODAL_TYPES.dataSubmittedSuccessfully}`}
        onPress={() =>
          dispatch(setModalType(MODAL_TYPES.dataSubmittedSuccessfully))
        }
      />
    </>
  );
};

export default TestModal;
