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

	const flDados = [
		{
			id: '1',
			titulo: 'Café da Manhã',
			alimentos: global.Alimentos.alimentosCafe,
		},
		{
			id: '2',
			titulo: 'Lanche da Manhã',
			alimentos: global.Alimentos.alimentosLancheM,
		},
		{
			id: '3',
			titulo: 'Almoço',
			alimentos: global.Alimentos.alimentosAlmoco,
		},
		{
			id: '4',
			titulo: 'Lanche da Tarde',
			alimentos: global.Alimentos.alimentosLancheT,
		},
		{
			id: '5',
			titulo: 'Janta',
			alimentos: global.Alimentos.alimentosJanta,
		},
	];

	function CalcularCaloria(item){	
		var caloriaTotal = 0;
		console.log("Ué: ", item.length)
		for (var x = 0; x < item.length; x ++){
			console.log("Ué: ", caloriaTotal)
			caloriaTotal = caloriaTotal + parseInt(item[x].kcal_Alimento)
		}
		return caloriaTotal
	}



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
								<Text note>{CalcularCaloria(item.alimentos)} kcal</Text>
							</View>

							<FlatList
								data={item.alimentos}
								horizontal={true}
								style={styles.listarIndiceRefeicoes}
								showsHorizontalScrollIndicator={false}
								renderItem={({ item }) => (<TouchableOpacity style={styles.containerShadow} onPress={() =>
									navigation.navigate('Alimento', { alimento: item })
								}>
									<Card transparent style={{ height: 150 }}>
										<Body >
											<Image
												style={{ width: 100, height: 100, resizeMode: "contain", marginBottom: 15 }}
												source={{uri: item.imagem}} />
											<Text note>{item.nome_Alimento}</Text>
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
