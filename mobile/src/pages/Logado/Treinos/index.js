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
  const dados1 = [
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
    } catch(err) {
        console.log("Error fetching data-----------", err);
    }
}

useEffect(() => {
  loadTreinos();
}, []);

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
            <Text style={styles.textoCampoTreino}>Treino {item.tipo_treino}</Text>
            <Text style={styles.textoCampoTreino}>Treino {item.desc_treino}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
