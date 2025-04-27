import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

export default function SurahListScreen({ navigation }) {
  const [surahList, setSurahList] = useState([]);

  useEffect(() => {
    axios.get('https://equran.id/api/surat')
      .then(response => {
        setSurahList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <FlatList
      data={surahList}
      keyExtractor={(item) => item.nomor.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('SurahDetail', { surahId: item.nomor })}>
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.nama_latin}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}
