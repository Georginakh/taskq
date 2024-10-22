import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; 
import SignIn from './SignIn';
import { SignUp } from './SignUp';
import { ForgotPassword } from './ForgotPassword';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
