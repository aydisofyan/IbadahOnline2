import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { styles } from '../assets/styles/detailstyles';
import axios from 'axios';

type Ayat = {
  nomor: string;  // pakai string, karena key object
  ar: string;
  idn: string;
};

type SurahDetail = {
  nama_latin: string;
  arti: string;
  ayat: { [key: string]: Ayat };  // ini object dengan dynamic key
};

type SurahDetailScreenProps = {
  route: RouteProp<RootStackParamList, 'SurahDetail'>;
};

export default function SurahDetailScreen({ route }: SurahDetailScreenProps) {
  const { surahId } = route.params;
  const [surahDetail, setSurahDetail] = useState<SurahDetail | null>(null);
  const [ayatArray, setAyatArray] = useState<Ayat[]>([]);

  useEffect(() => {
    axios.get<SurahDetail>(`https://equran.id/api/surat/${surahId}`)
      .then(response => {
        setSurahDetail(response.data);

        // Konversi object ayat ke array
        const ayatList = Object.keys(response.data.ayat).map((key) => ({
          nomor: key,
          ar: response.data.ayat[key].ar,
          idn: response.data.ayat[key].idn
        }));
        setAyatArray(ayatList);
      })
      .catch(error => console.error(error));
  }, [surahId]);

  if (!surahDetail) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.title}>{surahDetail.nama_latin}</Text>
          <Text style={styles.subtitle}>{surahDetail.arti}</Text>
        </View>
      )}
      data={ayatArray}
      keyExtractor={(item) => item.nomor}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.arab}>{item.ar}</Text>
          <Text style={styles.translation}>{item.idn}</Text>
        </View>
      )}
    />
  );
}
