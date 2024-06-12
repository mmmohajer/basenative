import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {getDeviceDimensions} from 'Utils/helpers';

import {localStyles} from './localStyles';

const Loading = () => {
  const loading = useSelector(state => state.loading);

  return (
    <>
      <AppView
        hAlign="center"
        vAlign="center"
        className="z-2 height-device pos-abs width-per-100 bg-green">
        <AppText className="text-red p-all-16 bg-red">Loading...</AppText>
      </AppView>
    </>
  );
};

export default Loading;
