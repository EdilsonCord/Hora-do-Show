import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
} from 'react-native';

import styles from './styles';

export default function Exercicio({navigation}) {
  const flDados = [
    {
      id: '1',
      titulo: 'Café da Manhã',
    },
    {
      id: '2',
      titulo: 'Lanche da Manhã',
    },
    {
      id: '3',
      titulo: 'Almoço',
    },
    {
      id: '4',
      titulo: 'Lanche da Tarde',
    },
    {
      id: '5',
      titulo: 'Janta',
    },
  ];

  const slDados = [
    {
      id: '1',
      titulo: 'Café da Manhã',
      data: ['Pão na chapa', 'Achocolatado'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.textoIntroducao}>Bem vindo, Diego</Text>
        <Text style={styles.textoIntroducao}>
          Esta é sua dieta de hoje
        </Text>
      </View>

      <View style={styles.faixa}>
        <Text style={styles.textoFaixa}>
          Dia 1
        </Text>
      </View>

      <FlatList
        data={flDados}
        style={styles.listarIndiceRefeicoes}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.campoIndiceRefeicoes}>
            <Text style={styles.textoIndiceRefeicoes}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />

      {/* <SectionList
        sections={slDados}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text >{title}</Text>
        )}
      /> */}
    </SafeAreaView>
  );
}
