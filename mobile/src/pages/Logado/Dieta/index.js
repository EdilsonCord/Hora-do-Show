import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
	SectionList,
} from 'react-native';

import { Container, Header, Content, H1, H2, H3, getTheme, StyleProvider, Left, Right, Card, List, ListItem, CardItem, Body, Icon, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import material from '../../../../native-base-theme/variables/material'
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

import DietIcon from '../../../assets/DietIcon.js';

export default function Dieta({ navigation }) {

	const [Alimentos, setAlimentos] = useState([]);

	async function loadAlimentos() {
		//Have a try and catch block for catching errors.
		try {
		   //Assign the promise unresolved first then get the data using the json method.
		   const pokemonApiCall = await fetch('http://' + global.endereco + '/alimento/get');
		   const pokemon = await pokemonApiCall.json();
		   setAlimentos(pokemon);
		} catch (err) {
		   console.log('Error fetching data-----------', err);
		}
	 }
  
	 useEffect(() => {
		loadAlimentos();
	 }, []);


	const [food, setFood] = useState(Alimentos);

	const AlimentosCafe = [
		{
			id: '0',
			idAlimento: 0,
		},
		{
			id: '1',
			idAlimento: 0,
		}
	]

	const AlimentosLancheManha = [
		{
			id: '0',
			idAlimento: 0,
		},
		{
			id: '1',
			idAlimento: 0,
		},
		{
			id: '2',
			idAlimento: 0,
		},
		{
			id: '3',
			idAlimento: 0,
		},
		{
			id: '4',
			idAlimento: 0,
		}
	]

	const flDados = [
		{
			id: '1',
			titulo: 'Café da Manhã',
			alimentos: AlimentosCafe,
		},
		{
			id: '2',
			titulo: 'Lanche da Manhã',
			alimentos: AlimentosLancheManha,
		},
		{
			id: '3',
			titulo: 'Almoço',
			alimentos: AlimentosCafe,
		},
		{
			id: '4',
			titulo: 'Lanche da Tarde',
			alimentos: AlimentosCafe,
		},
		{
			id: '5',
			titulo: 'Janta',
			alimentos: AlimentosCafe,
		},
	];



	const f2Dados = [1, 2, 1, 2];

	const slDados = [
		{
			id: '1',
			titulo: 'Café da Manhã',
			data: ['Maca', 'Maca', 'Maca'],
		},
	];
	const Item = ({ titulo }) => (
		<Text style={styles.textoIndiceRefeicoes}>{titulo}</Text>
	)

	console.log(Alimentos);


	return (
		Alimentos === undefined ? null :
		<StyleProvider style={getTheme(material)}>
			<Container style={styles.container}>

				<View style={{ justifyContent: "space-between", padding: 15, flexDirection: 'row', height: "15%", width: "100%" }}>

					<View>
						<Text note>Refeições de</Text>
						<Text style={{ fontSize: 24 }}>Hoje</Text>
					</View>

					{/* <DietIcon fill={material.brandDanger} width="75"/> */}


					<Button rounded block danger>
						<Text style={styles.textoFaixa}>
							Dia 1
            </Text>
					</Button>
				</View>


				<FlatList
					data={flDados}
					style={styles.listarIndiceRefeicoes}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<View style={styles.containerRefeicoes}>
							<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
								<Text style={styles.textoIndiceRefeicoes}>{item.titulo}</Text>
								<Text note>1200 kcal</Text>
							</View>

							<FlatList
								data={item.alimentos}
								horizontal={true}
								style={styles.listarIndiceRefeicoes}
								showsHorizontalScrollIndicator={false}
								extraData={Alimentos}
								renderItem={({ item }) => (<TouchableOpacity style={styles.containerShadow} onPress={() =>
									navigation.navigate('Alimento', { alimento: Alimentos[0] })
								}>
									<Card transparent style={{ height: 150 }}>
										<Body >
											<Image
												style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 15 }}
												source={{uri: 'https://i.imgur.com/8hhG7ar.png'}} />
											<Text note>Maçã</Text>
										</Body>
									</Card>
								</TouchableOpacity>

								)}
							/>
						</View>

					)}
				/>

			</Container>

		</StyleProvider>

	);
}
