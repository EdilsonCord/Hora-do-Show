import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Video from 'react-native-video';

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
          <Video
            source={{uri: 'https://youtu.be/iSqJwuNJHBI'}} // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref;
            }} // Store reference
            onBuffer={this.onBuffer} // Callback when remote video is buffering
            onError={this.videoError} // Callback when video cannot be loaded
            style={styles.video}
          />
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
