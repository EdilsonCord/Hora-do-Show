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
import FIcons from 'react-native-vector-icons/Feather';

const size = 25;

const IconSetaEsquerta = <FIcons name="arrow-left" size={size} color="#fff" />;

export default function Exercicio({navigation}) {
  const dados = [
    {
      id: '1',
      nome_exercicio: 'Flexão',
      descricao_exercicio:
        'Coloque-se na posição padrão de flexão, com as mãos levemente mais afastadas que a largura dos ombros e os braços totalmente estendidos. Peça para outra pessoa colocar a anilha sobre as suas costas.',
      qtd_series: '3',
      qtd_repeticoes: '12',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.introducao}>
          <Text style={styles.textoIntroducao}>Olá, Diego!</Text>
          <Text style={styles.textoIntroducao}>
            Aqui estão os exercícios do seu treino de hoje
          </Text>
        </View>

        <View style={styles.faixa}>
          <Text style={styles.textoFaixa}>Treino X</Text>
        </View>
      </View>

      <View style={styles.campoExercicio}>
        <View style={styles.imgExercicio} />

        <Text style={styles.tituloInfoTreino}>Descrição:</Text>
        <Text style={styles.descricaoInfoTreino}>
          Quantidade de Séries: xxx
        </Text>
        <Text style={styles.descricaoInfoTreino}>
          Quantidade de Repetições: xx
        </Text>
      </View>
    </SafeAreaView>
  );
}
