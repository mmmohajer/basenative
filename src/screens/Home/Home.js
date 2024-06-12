import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';
import LogoutComponent from 'BaseComponents/LoginRegister/LogoutComponent';
import ScreenContainer from 'Components/ScreenWrappers/ScreenContainer';
import AuthRoute from 'Components/RouteHandlers/AuthRoute';
import PublicChat from 'BaseComponents/ReusableComps/PublicChat';
import DevDesign from 'Components/DevDesign';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from './localStyles';

const Home = () => {
  const navigation = useNavigation();

  const language = useSelector(state => state.language);

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AuthRoute>
          <AppText>Home {language}</AppText>
          <Button
            btnText="See Products"
            onPress={() => navigation.navigate('ProductStack')}
          />
          <LogoutComponent />
          {/* <PublicChat /> */}
          {/* <DevDesign /> */}
        </AuthRoute>
      </ScreenContainer>
    </>
  );
};

export default Home;
