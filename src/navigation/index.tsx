// Routes to all the app pages

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '@views/home';
import CartScreen from '@views/cart';

const Stack = createNativeStackNavigator();

function Router(): JSX.Element {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Products' }}/>
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
  );
}

export default Router;