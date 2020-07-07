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
      title: 'Flexão',
    },
    {
      id: '2',
      title: 'Abdominal',
    },
    {
      id: '3',
      title: 'Flexão',
    },
    {
      id: '4',
      title: 'Abdominal',
    },
    {
      id: '5',
      title: 'Flexão',
    },
    {
      id: '6',
      title: 'Abdominal',
    },
    {
      id: '7',
      title: 'Flexão',
    },
    {
      id: '8',
      title: 'Abdominal',
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
          <Text style={styles.textoIntroducao}>
            Você completou x exercícios	de x
          </Text>

        </View>

        <View style={styles.faixa}>
          <Text style={styles.textoFaixa}>Treino X</Text>
        </View>

      </View>

      <FlatList
        data={dados}
        style={styles.listarExercicios}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.campoExercicio}>
            <View style={styles.imgExercicio} />

            <View style={styles.miniInfoExercicio}>
              <Text style={styles.tituloInfoTreino}>{item.title}</Text>
              <Text style={styles.descricaoInfoTreino}>nº Séries: xxx</Text>
              <Text style={styles.descricaoInfoTreino}>nº Repetições: xx</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('Informacoes')}>
                <Text style={styles.maisInfoTreino}>mais info</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoConcluido} >
              <Text style={styles.textoBotao}>Concluído</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
