import React, {useEffect, useState} from 'react';
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
  const [dados, setDados] = useState([]);

  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous.
  async function loadTreinos() {
    //Have a try and catch block for catching errors.
    try {
      //Assign the promise unresolved first then get the data using the json method.
      const pokemonApiCall = await fetch('http://10.0.2.2:3333/treino/get');
      const pokemon = await pokemonApiCall.json();
      setDados(pokemon);
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  useEffect(() => {
    loadTreinos();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerTotal}>
        <View style={styles.introducao}>
          <Text style={styles.textoIntroducao}>Bem vindo(a), {global.user.name}!</Text>
          <Text style={styles.textoIntroducao}>
            Escolha qual treino deseja fazer hoje
          </Text>
        </View>

        <View style={styles.headerFaixa}>
          <View style={styles.faixa}>
            <Text style={styles.textoFaixa}>
              Escolha um dos treinos abaixo para alcançar sua meta
            </Text>
          </View>
        </View>
      </View>

      <FlatList
        data={dados}
        style={styles.listarTreinos}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <View style={styles.organizarlistaTreinos}>
            <TouchableOpacity
              style={styles.campoTreino}
              onPress={() =>
                navigation.navigate('Exercicios', {treino: item._id, nomeTreino: item.tipo_treino})
              }>
              <Text style={styles.textoCampoTreino}>
                Treino {item.tipo_treino}
              </Text>
            </TouchableOpacity>
            <View style={styles.campoDesc}>
              <Text style={styles.textCampoDesc}>{item.desc_treino}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
