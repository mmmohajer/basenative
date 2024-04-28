import {createStackNavigator} from '@react-navigation/stack';

import Login from 'Screens/Login';
import Register from 'Screens/Register';

const Stack = createStackNavigator();

export const LoginRegisterNavigations = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        title: 'Login',
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={({route}) => ({
        title: 'Register',
      })}
    />
  </Stack.Navigator>
);
