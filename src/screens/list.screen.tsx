import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { styles } from '../assets/styles/liststyles';
import axios from 'axios';

type Surah = {
  nomor: number;
  nama_latin: string;
};

type SurahListScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'SurahList'>;
};

export default function SurahListScreen({ navigation }: SurahListScreenProps) {
  const [surahList, setSurahList] = useState<Surah[]>([]);

  useEffect(() => {
    axios.get<Surah[]>('https://equran.id/api/surat')
      .then(response => setSurahList(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <FlatList
      data={surahList}
      keyExtractor={(item) => item.nomor.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SurahDetail', { surahId: item.nomor })}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nama_latin}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
