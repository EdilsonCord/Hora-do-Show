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
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Treino A',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Treino B',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Treino C',
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.introducao}>
        <Text style={styles.textoIntroducao}>Bem vindo, Diego</Text>
        <Text style={styles.textoIntroducao}>
          Escolha qual treino deseja fazer hoje
        </Text>
      </View>

      <View style={styles.faixa}>
          <Text style={styles.textoFaixa}>Escolha um dos treinos abaixo para alcançar sua meta</Text>
      </View>

      <FlatList
        data={dados}
        style={styles.listarTreinos}
        renderItem={({item}) => 
          <TouchableOpacity style={styles.campoTreino}>
            <Text style={styles.textoCampoTreino}>{item.title}</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
}
