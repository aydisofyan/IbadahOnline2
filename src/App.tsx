import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home.screen';
import SurahListScreen from './screens/list.screen';
import SurahDetailScreen from './screens/detail.screen';
import SplashScreen from './screens/splash.screen';



export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
  SurahList: undefined;
  SurahDetail: { surahId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SurahList" component={SurahListScreen} />
      <Stack.Screen name="SurahDetail" component={SurahDetailScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
    
}
