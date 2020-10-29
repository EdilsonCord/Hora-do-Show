import React, { useEffect, useState } from 'react';
import {
	View,
	Image,
	Text,
	FlatList,
	SafeAreaView,
	TouchableOpacity,
} from 'react-native';

import styles from './styles';

import colors from 'dir-src/assets/colors.js';
import Icon from 'react-native-vector-icons/MaterialIcons';
const IconCheckBoxFull = <Icon name="check-box" size={30} color={colors.mainExerciseDone} />;
const IconCheckBoxPartial = <Icon name="check-box-outline-blank" size={30} color={colors.mainExerciseUndone} />;

export default function Exercicios({ navigation, route }) {
	const [dados, setDados] = useState([]);
	const [treino, setTreino] = useState([route.params.treino]);
	const [nomeTreino, setNomeTreino] = useState([route.params.nomeTreino]);

	const [selected, setSelected] = React.useState(new Map());

	const onSelect = React.useCallback(
		(id) => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected],
	);

	//Define your componentDidMount lifecycle hook that will retrieve data.
	//Also have the async keyword to indicate that it is asynchronous.
	async function loadExercicios() {
		//Have a try and catch block for catching errors.
		try {
			//Assign the promise unresolved first then get the data using the json method.
			console.log(treino);
			const dadosAPICall = await fetch(
				'http://10.0.2.2:3333/treino/get/id/' + treino,
			);
			const dadosJson = await dadosAPICall.json();
			console.log(dadosJson);
			setDados(dadosJson.exercicios);
		} catch (err) {
			console.log('Error fetching data-----------', err);
		}
	}

	useEffect(() => {
		loadExercicios();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerTotal}>
				<View style={styles.introducao}>
					<Text style={styles.textoIntroducao}>Olá, {global.user.name}!</Text>
					<Text style={styles.textoIntroducao}>
						Aqui estão os exercícios do seu treino de hoje
          </Text>
					<Text style={styles.textoIntroducao}>
						Você completou x exercícios de {dados.length}
					</Text>
				</View>

				<View style={styles.headerFaixa}>
					<View style={styles.faixa}>
						<Text style={styles.textoFaixa}>Treino {nomeTreino} </Text>
					</View>
				</View>
			</View>

			<FlatList
				data={dados}
				keyExtractor={(item) => item._id}
				extraData={selected}
				style={styles.listarExercicios}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<View
						style={
							selected.get(item._id)
								? styles.campoExercicioConcluido
								: styles.campoExercicio
						}>
						<Image
							source={{
								uri:
									'https://images.unsplash.com/photo-1562771242-a02d9090c90c?ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
							}}
							style={styles.imgExercicio}
						/>

						<View style={styles.miniInfoExercicio}>
							<Text style={styles.tituloInfoTreino}>{item.nome_exercicio}</Text>
							<Text style={styles.descricaoInfoTreino}>
								nº Séries:{' '}
								<Text style={styles.descricaoNumeroInfoTreino}>
									{item.qtd_series}
								</Text>
							</Text>
							<Text style={styles.descricaoInfoTreino}>
								nº Repetições:{' '}
								<Text style={styles.descricaoNumeroInfoTreino}>
									{item.qtd_repeticoes}
								</Text>
							</Text>
							<TouchableOpacity
								onPress={() =>
									navigation.navigate('Informacoes', { exercicio: item })
								}>
								<Text style={styles.maisInfoTreino}>mais info</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity
							// style={styles.botaoConcluido}
							onPress={() => onSelect(item._id)}>
							<View>
								{IconCheckBoxFull}
							</View>
							{/* <Text style={styles.textoBotao}>Concluir</Text> */}
						</TouchableOpacity>
					</View>
				)}
			/>
		</SafeAreaView>
	);
}
