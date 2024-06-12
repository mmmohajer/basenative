import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import { useNavigation } from "@react-navigation/native";

import AppView from 'BaseComponents/ReusableComps/AppView';
import AppText from 'BaseComponents/ReusableComps/AppText';
import Button from 'BaseComponents/ReusableComps/Button';
import ScreenContainer from 'Components/ScreenWrappers/ScreenContainer';
import AuthRoute from 'Components/RouteHandlers/AuthRoute';

import {styles, fontStyleFunc} from 'Styles';

import {localStyles} from './localStyles';

const Products = () => {
  // const navigation = useNavigation();

  return (
    <>
      <ScreenContainer isScrollable={false}>
        <AuthRoute>
          <AppText>Products</AppText>
          <Button
            btnText="See Details"
            // onPress={() => navigation.navigate("ProductDetails", { id: 1 })}
          />
        </AuthRoute>
      </ScreenContainer>
    </>
  );
};

export default Products;
