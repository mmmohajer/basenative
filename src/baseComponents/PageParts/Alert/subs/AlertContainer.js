import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from '../localStyles';

const AlertContainer = ({children}) => {
  return (
    <>
      <AppView className="width-per-100 pos-abs">{children}</AppView>
    </>
  );
};

export default AlertContainer;
