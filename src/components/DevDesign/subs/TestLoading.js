import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';

import {isLoading, isLoaded} from 'Reducers/general/loading';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from '../localStyles';

const TestLoading = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        btnText="Show Loading"
        onPress={() => {
          dispatch(isLoading());
          setTimeout(() => {
            dispatch(isLoaded());
          }, 5000);
        }}
      />
    </>
  );
};

export default TestLoading;
