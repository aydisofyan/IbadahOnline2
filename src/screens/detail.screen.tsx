import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { styles } from '../assets/styles/detailstyles';
import axios from 'axios';

type Ayat = {
  nomor: number;
  teks_arab: string;
  teks_arti: string;
};

type SurahDetail = {
  nama_latin: string;
  arti: string;
  ayat: Ayat[];
};

type RootStackParamList = {
  Home: undefined;
  SurahList: undefined;
  SurahDetail: { surahId: number };
};

type Props = NativeStackScreenProps<RootStackParamList, 'SurahDetail'>;

export default function SurahDetailScreen({ route }: Props) {
  const { surahId } = route.params;
  const [surahDetail, setSurahDetail] = useState<SurahDetail | null>(null);

  useEffect(() => {
    axios.get<SurahDetail>(`https://equran.id/api/surat/${surahId}`)
      .then(response => setSurahDetail(response.data))
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
      data={surahDetail.ayat}
      keyExtractor={(item) => item.nomor.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.ayatHeader}>
            {/* <Text style={styles.ayatNumber}>{item.nomor}</Text> */}
            <Text style={styles.arab}>{item.teks_arab}</Text>
          </View>
          <Text style={styles.translation}>{item.teks_arti}</Text>
        </View>
      )}
    />
  );
}
