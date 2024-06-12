import {useState} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {setModalType} from 'Reducers/general/modalType';

import {localStyles} from '../localStyles';

const TestModal = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Button
        btnText="Show Modal"
        onPress={() => dispatch(setModalType('data_submitted_successfully'))}
      />
    </>
  );
};

export default TestModal;
