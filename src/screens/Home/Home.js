import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import AppView from 'BaseComponents/AppView';
import AppText from 'BaseComponents/AppText';
import Button from 'BaseComponents/Button';
import LogoutComponent from 'BaseComponents/LogoutComponent';
import ScreenContainer from 'Components/ScreenContainer';
import PublicRoute from 'Components/PublicRoute';
import PublicChat from 'Components/PublicChat';
import DevDesign from 'Components/DevDesign';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from './localStyles';

const Home = () => {
  const navigation = useNavigation();

  const language = useSelector(state => state.language);

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <PublicRoute>
          <AppText>Hello how are you </AppText>
          
          
          {/* <PublicChat /> */}
          {/* <DevDesign /> */}
        </PublicRoute>
      </ScreenContainer>
    </>
  );
};

export default Home;
