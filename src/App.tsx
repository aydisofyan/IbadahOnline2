import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home.screen';
import SurahListScreen from './screens/Listscreens';
import SurahDetailScreen from './screens/Detailscreens';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SurahList" component={SurahListScreen} />
        <Stack.Screen name="SurahDetail" component={SurahDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
