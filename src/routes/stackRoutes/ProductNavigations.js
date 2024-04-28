import {createStackNavigator} from '@react-navigation/stack';

import Products from 'Screens/Products';
import ProductDetails from 'Screens/ProductDetails';

const Stack = createStackNavigator();

export const ProductNavigations = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'tomato'},
      headerTintColor: 'white',
      headerShown: false,
    }}>
    <Stack.Screen
      name="Products"
      component={Products}
      options={{
        title: 'Products',
      }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={({route}) => ({
        title: `Product #${route.params.id}`,
      })}
    />
  </Stack.Navigator>
);
