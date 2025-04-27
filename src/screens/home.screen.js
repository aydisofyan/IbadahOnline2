import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Ibadah</Text>
      <Text style={{ fontSize: 24 }}>Online</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('SurahList')}
      />
    </View>
  );
}
