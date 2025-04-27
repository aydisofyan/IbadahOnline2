import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

export default function SurahDetailScreen({ route }) {
  const { surahId } = route.params;
  const [surahDetail, setSurahDetail] = useState(null);

  useEffect(() => {
    axios.get(`https://equran.id/api/surat/${surahId}`)
      .then(response => {
        setSurahDetail(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [surahId]);

  if (!surahDetail) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{surahDetail.nama_latin}</Text>
      <Text style={{ fontSize: 18, marginVertical: 10 }}>{surahDetail.arti}</Text>
      <FlatList
        data={surahDetail.ayat}
        keyExtractor={(item) => item.nomor.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text>{item.teks_arab}</Text>
            <Text>{item.teks_arti}</Text>
          </View>
        )}
      />
    </View>
  );
}
