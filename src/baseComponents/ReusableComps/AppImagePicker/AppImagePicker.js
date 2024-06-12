import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const AppImagePicker = () => {
  return (
    <>
      <AppView>
        <AppText>AppImagePicker works with Expo</AppText>
      </AppView>
    </>
  );
};

export default AppImagePicker;
