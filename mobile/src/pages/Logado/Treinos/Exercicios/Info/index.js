import React, {setState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Video from 'react-native-video';

import styles from './styles';

export default function Exercicio({navigation, route}) {

  const [dados, setDados] = React.useState(route.params.exercicio)

  const dados1 = [
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
      <View style={styles.headerTotal}>
        <View style={styles.headerInicio}>
          <View style={styles.inicio}>
            <Image style={styles.video} source={{uri: 'https://media.giphy.com/media/wPlefbJWKMBDq/giphy.gif',}}/>

            {/* <Text>Video deve estar acima de mim</Text> */}
          </View>
        </View>

        <View style={styles.headerFaixa}>
          <View style={styles.faixa}>
            <Text style={styles.textoFaixa}>{dados.nome_exercicio}</Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={true} style={styles.scrollView}>
        <View style={styles.campoInfoExercicio}>
          {/* <Text style={styles.textoInfoTitulo}>Nome</Text>
          <Text style={styles.textoInfoDesc}>Supino Reto</Text> */}

          <Text style={styles.textoInfoTitulo}>Descrição</Text>
          <Text style={styles.textoInfoDescAbaixo}>
            {dados.descricao_exercicio}
          </Text>

          <Text style={styles.textoInfoTitulo}>
            Quantidade de Séries: 
            <Text style={styles.textoInfoDescLado}> {dados.qtd_series}</Text>
          </Text>

          <Text style={styles.textoInfoTitulo}>
            Quantidade de Repetições: 
            <Text style={styles.textoInfoDescLado}> {dados.qtd_repeticoes}</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
