import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
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
      <Button btnText="Close Modal" onPress={() => clearModal(dispatch)} />
    </>
  );
};

export default DataSubmittedSuccessfully;
