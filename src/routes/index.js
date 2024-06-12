import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import Icon from 'BaseComponents/ReusableComps/Icon';

import Home from 'Screens/Home';
import Products from 'Screens/Products';
import DevDesign from 'Components/DevDesign';

import {ProductNav} from './stackRoutes';
import {LoginRegisterNav} from './stackRoutes';

const Routes = () => {
  const Tab = createBottomTabNavigator();

  const isAuthenticated = useSelector(state => state.isAuthenticated);

  return (
    <>
      <NavigationContainer>
        <DevDesign />
      </NavigationContainer>
    </>
  );
};

export default Routes;
