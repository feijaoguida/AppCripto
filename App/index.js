import React from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { CryptoDetail, Transaction, Login } from "./screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import Tabs from "./navigation/tabs";


const Stack = createStackNavigator();

const App = () => {

  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
  });
    
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Login'}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="Home"
            component={Tabs}
          />
          <Stack.Screen
            name="CryptoDetail"
            component={CryptoDetail}
          />
          <Stack.Screen
            name="Transaction"
            component={Transaction}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;