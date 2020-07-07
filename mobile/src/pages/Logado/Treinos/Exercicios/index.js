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

export default function Exercicio({navigation, route}) {

  const [dados, setDados] = useState([]);
  const [treino, setTreino] = useState([route.params.treino]);
  
  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous. 
  async function loadExercicios() {
      //Have a try and catch block for catching errors.
      try {
          //Assign the promise unresolved first then get the data using the json method.
          console.log(treino);
          const dadosAPICall = await fetch('http://10.0.2.2:3333/treino/get/id/' + treino);
          const dadosJson = await dadosAPICall.json();
          console.log(dadosJson);
          setDados(dadosJson.exercicios);
      } catch(err) {
          console.log("Error fetching data-----------", err);
      }
  }
  
  useEffect(() => {
    loadExercicios();
  }, []);
  

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
            <View style={styles.imgExercicio}/>

            <View style={styles.miniInfoExercicio}>
              <Text style={styles.tituloInfoTreino}>{item.nome_exercicio}</Text>
              <Text style={styles.descricaoInfoTreino}>nº Séries: {item.qtd_series}</Text>
              <Text style={styles.descricaoInfoTreino}>nº Repetições: {item.qtd_repeticoes}</Text>
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
