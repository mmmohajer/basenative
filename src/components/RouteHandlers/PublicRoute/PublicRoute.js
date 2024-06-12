import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';

import {localStyles} from './localStyles';

const PublicRoute = ({children}) => {
  return <>{children}</>;
};

export default PublicRoute;
