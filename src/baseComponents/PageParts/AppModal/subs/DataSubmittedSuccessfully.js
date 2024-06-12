import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {clearModal} from 'Utils/modal';

import {localStyles} from '../localStyles';

const DataSubmittedSuccessfully = () => {
  const dispatch = useDispatch();

  return (
    <>
      <AppView className="bg-green width-per-100 height-device">
        <Button btnText="Close Modal" onPress={() => clearModal(dispatch)} />
      </AppView>
    </>
  );
};

export default DataSubmittedSuccessfully;
