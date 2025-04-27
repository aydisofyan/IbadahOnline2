import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { styles } from '../assets/styles/homestyles';

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple Quran App</Text>
      <Button
        title="Lihat Daftar Surah"
        onPress={() => navigation.navigate('SurahList')}
      />
    </View>
  );
}
