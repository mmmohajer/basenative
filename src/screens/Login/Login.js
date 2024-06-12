import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import AppTouchable from 'BaseComponents/ReusableComps/AppTouchable';
import LoginComponent from 'BaseComponents/LoginRegister/LoginComponent';
import ScreenContainer from 'Components/ScreenWrappers/ScreenContainer';
import PublicRoute from 'Components/RouteHandlers/PublicRoute';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from './localStyles';

const Login = () => {
  const navigate = useNavigation();

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <PublicRoute>
          <AppView padding={2} margin={2} brThickness={2}>
            <LoginComponent />
            <AppTouchable
              margin={2}
              isCentralizedInX1Dir
              isCentralizedInX2Dir
              bgColor="red"
              padding={2}
              touchableProps={{onPress: () => navigate.navigate('Register')}}>
              <AppText
                textProps={{
                  color: 'white',
                  isBold: true,
                  lineHeight: 20,
                  isCenterAlign: true,
                }}>
                Register
              </AppText>
            </AppTouchable>
          </AppView>
        </PublicRoute>
      </ScreenContainer>
    </>
  );
};

export default Login;
