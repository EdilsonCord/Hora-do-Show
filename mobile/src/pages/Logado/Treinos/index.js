<<<<<<< HEAD
import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  View,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
=======
import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
>>>>>>> fa3b496393f000894c33fbfde08964a50b7a0e6c
} from 'react-native';

import { Container, Title, Content, H1, H2, H3, getTheme, StyleProvider, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';

import material from '../../../../native-base-theme/variables/material'
import styles from './styles';
import GymIcon from '../../../assets/GymIcon.js'


export default function Exercicio({ navigation }) {
	const [dados, setDados] = useState([]);

<<<<<<< HEAD
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }
    ).start();
  }, [fadeAnim])

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
=======
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
>>>>>>> fa3b496393f000894c33fbfde08964a50b7a0e6c

	useEffect(() => {
		loadTreinos();
	}, []);

	return (

<<<<<<< HEAD
    <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
          
          <GymIcon fill={material.brandWarning}/>
=======
		<StyleProvider style={getTheme(material)}>
			<Container style={styles.container}>
>>>>>>> fa3b496393f000894c33fbfde08964a50b7a0e6c

				<GymIcon fill={material.brandInfo} />

				<Text style={styles.textoCabecalho}>Treinos</Text>

				{/* <Icon type="MaterialCommunityIcons" name="weight-lifter" style={{marginVertical: 15, color: "#ffe42e", fontSize: 75}} /> */}

				<View style={styles.faixa}>
					<Text note style={styles.textoFaixa}>
						Escolha um dos treinos abaixo para alcançar sua meta
            </Text>
				</View>

				<FlatList
					data={dados}
					style={styles.listarTreinos}
					keyExtractor={item => item._id}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={styles.containerShadow}>

<<<<<<< HEAD
            <FlatList
              data={dados}
              style={styles.listarTreinos}
              keyExtractor={item => item._id}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Animated.View style={[styles.containerShadow, {opacity: fadeAnim}]}>

                  <Image source={{uri: item.imagem}} style={{marginLeft: "-13%", marginVertical: -10, width: 100, height: 100, borderRadius: 50, backgroundColor: "#fafafa"}}/>
=======
							<Image source={item.tipo_treino == 'A' ? require('dir-src/assets/pushup.jpg') : item.tipo_treino == 'B' ? require('../../../assets/levantamento.jpg') : require('../../../assets/agachamento.jpg')} style={{ marginLeft: "-13%", marginVertical: -10, width: 100, height: 100, borderRadius: 50, backgroundColor: "#fafafa" }} />

>>>>>>> fa3b496393f000894c33fbfde08964a50b7a0e6c

							<TouchableOpacity style={{ marginLeft: 20, width: 225 }} onPress={() =>
								navigation.navigate('Exercicios', { treino: item._id, nomeTreino: item.tipo_treino })
							}>
								<Text style={{ marginBottom: 10, fontSize: 20, fontWeight: "700" }}>Treino {item.tipo_treino}</Text>
								<Text note>{item.desc_treino}</Text>
								<Text style={{ color: material.brandInfo, marginTop: 5, textAlign: 'right' }}> 0 de 5 <Icon style={{ color: material.brandInfo, fontSize: 15 }} name="weight-lifter" type="MaterialCommunityIcons"></Icon></Text>
							</TouchableOpacity>

<<<<<<< HEAD
                  <View style={{marginLeft: 20, width: 225}}>
                    <Text style={{marginBottom: 10, fontSize: 20,fontWeight: "700"}}>Treino {item.tipo_treino}</Text>
                    <Text note>{item.desc_treino}</Text>
                    <Text  style={{color: material.brandWarning,marginTop: 5,textAlign: 'right'}}> 0 de 5 <Icon style={{color: material.brandWarning, fontSize: 15}} name="weight-lifter" type="MaterialCommunityIcons"></Icon></Text>
                  </View>

                </Animated.View>
              )}
            />
=======
						</View>
					)}
				/>

			</Container>
>>>>>>> fa3b496393f000894c33fbfde08964a50b7a0e6c

		</StyleProvider>


	);
}
