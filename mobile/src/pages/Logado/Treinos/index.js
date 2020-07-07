import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function Exercicio({navigation}) {
  const dados = [
    {
      id: '1',
      title: 'Treino A',
    },
    {
      id: '2',
      title: 'Treino B',
    },
    {
      id: '3',
      title: 'Treino C',
    },
    {
      id: '4',
      title: 'Treino C',
    },
    {
      id: '5',
      title: 'Treino C',
    },
    {
      id: '6',
      title: 'Treino C',
    },
    {
      id: '7',
      title: 'Treino C',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.introducao}>
          <Text style={styles.textoIntroducao}>Bem vindo, Diego!</Text>
          <Text style={styles.textoIntroducao}>
            Escolha qual treino deseja fazer hoje
          </Text>

        </View>

        <View style={styles.faixa}>
          <Text style={styles.textoFaixa}>
            Escolha um dos treinos abaixo para alcançar sua meta
          </Text>
        </View>

      </View>

      <FlatList
        data={dados}
        style={styles.listarTreinos}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.campoTreino}
            onPress={() => navigation.navigate('Exercicios')}>
            <Text style={styles.textoCampoTreino}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
